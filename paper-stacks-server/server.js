const express = require('express');
const app = express();
const port = 3000;

// A simple stack array for testing
let stack = ['image1.png', 'image2.png', 'image3.png'];

// Route to peek at the top item
app.get('/stack/top', (req, res) => {
    if (stack.length === 0) {
        return res.status(404).send('Stack is empty');
    }
    res.send(`Top of stack: ${stack[stack.length - 1]}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});