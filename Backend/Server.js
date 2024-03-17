const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const UploadRoute = require("./routes/UploadRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Middleware
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.use(UploadRoute); // Move route usage inside the connection promise to ensure it's only used after successful connection
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
