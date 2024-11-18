const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import JSON data
const data = require('./data/data.json');

// API route to serve JSON data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
