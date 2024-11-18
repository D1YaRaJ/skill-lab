const express = require('express');
const PriorityQueue = require('./priorityQueue');
const Stack = require('./stack');

const app = express();
app.use(express.json());

const complaintQueue = new PriorityQueue();
const resolvedComplaintsStack = new Stack();
const logEntries = [];

// Complaint Registration API
app.post('/complaints', (req, res) => {
    const { description, healthRisk, missedPickups, proximityToSensitiveArea } = req.body;
    let priority = calculatePriority(healthRisk, missedPickups, proximityToSensitiveArea);
    complaintQueue.enqueue({ description, healthRisk, missedPickups, proximityToSensitiveArea }, priority);
    res.status(201).send('Complaint registered successfully');
});

// Process Complaint
app.post('/process-complaint', (req, res) => {
    if (complaintQueue.isEmpty()) {
        return res.status(200).send('No complaints to process');
    }
    const complaint = complaintQueue.dequeue().element;
    resolvedComplaintsStack.push(complaint);
    logEntries.push({ action: 'processed', complaint, timestamp: new Date() });
    res.status(200).send('Complaint processed successfully');
});

// Revert Complaint
app.post('/revert-complaint', (req, res) => {
    if (resolvedComplaintsStack.isEmpty()) {
        return res.status(200).send('No complaints to revert');
    }
    const complaint = resolvedComplaintsStack.pop();
    logEntries.push({ action: 'reverted', complaint, timestamp: new Date() });
    res.status(200).send('Complaint reverted successfully');
});

// View Logs
app.get('/logs', (req, res) => {
    res.status(200).json(logEntries);
});

// Utility function to calculate priority
function calculatePriority(healthRisk, missedPickups, proximityToSensitiveArea) {
    let priority = 0;
    if (healthRisk) priority += 3;
    if (missedPickups) priority += 2;
    if (proximityToSensitiveArea) priority += 1;
    return priority;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
