// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, this is your server!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
