const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Blog = require('./model/Blog.js');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`);
});

// Database connection
const DB = 'mongodb+srv://DiyaRaj:diyaraj@cluster1.wjkkmng.mongodb.net/';
mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.error('Database connection error:', err);
});

// Add a phone number
app.post('/add-blog', async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const blog = new Blog({ title, content, author });
        await blog.save();
        res.status(201).json({
            status: 'Success',
            data: blog
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});

// Get all phone numbers
app.get('/get-blogs', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.status(200).json({
            status: 'Success',
            data: blogs
        });
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err.message
        });
    }
});

