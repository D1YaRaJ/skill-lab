const express = require('express');
const cron = require('node-cron');

const app = express();
app.use(express.json());

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
            this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const menu = [];
const orders = [];
const orderQueue = new Queue();

app.post('/menu', (req, res) => {
        menu.push({ 
            id:req.body.id,
            name:req.body.name,
            price:req.body.price,
            category:req.body.category
         });
        res.send('Menu item added successfully');
});

app.get('/menu', (req, res) => {
    res.json(menu);
});

app.post('/orders', (req, res) => {
    const { id, items } = req.body;
    const order = { id, items, status: 'Preparing' };
    orders.push(order);
    orderQueue.enqueue(order);
    res.send('Order placed successfully');
});

app.get('/orders/:id', (req, res) => {
    const order = orders.find(order => order.id === req.params.id);
    if (!order) {
        return res.status(404).send('Order not found');
    }
    res.json(order);
});

cron.schedule('1 * * * *', () => {
    if (!orderQueue.isEmpty()) {
        const order = orderQueue.dequeue();
        if (order.status === 'Preparing') {
            order.status = 'Out for Delivery';
            orderQueue.enqueue(order);
        } else if (order.status === 'Out for Delivery') {
            order.status = 'Delivered';
        }
    }
});

app.listen(1234,()=> console.log('Server started'))






