const express = require('express');
const app = express();

// First Middleware (e.g., Logging)
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next(); // Move to the next middleware/route handler
});

// Second Middleware (e.g., Adding a custom header)
app.use((req, res, next) => {
    res.setHeader('X-Custom-Header', 'LearningNodeJS');
    next(); // Proceed to the next middleware/route handler
});

// Route Handler
app.get('/', (req, res) => {
    res.send('<h1>Hello to Node.js!</h1>');
});

// Starting the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//Access your app in a browser:
//http://localhost:3000