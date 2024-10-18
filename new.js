// Importing Express
const express = require('express');
const path = require('path');

// Initialize the app
const app = express();

// Middleware to serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a port number
const PORT = 3000;

// Define the route to send home.html
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Define the route to send flip.html as a sub-route of home
app.get('/flip', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'flip.html'));
});

// Define the route to send amz.html as a sub-route of home
app.get('/amazon', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'amz.html'));
});
// Route to send mesh.html for the Meesho page
app.get('/mesh', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mesh.html'));
});

// Define a universal route using *
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'lol.html')); // Serve lol.html for any undefined routes
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
