const express = require('express');
const path = require('path');

// Create Express app
const app = express();

// App will run on port 3000
const PORT = 3000;

// Serve static files from the public folder
// Example: /styles.css, /script.js, /portfilo%20pic.png
app.use(express.static(path.join(__dirname, 'public')));

// Home route: send the portfolio HTML from the views folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
