const express = require('express');
const path = require('path');

const app = express();

// Serve static files like CSS and JavaScript
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define route to render the index.ejs page
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
