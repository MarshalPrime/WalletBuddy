// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

// Database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Godblessabayo@1',
  database: 'walletbuddy'
});

connection.connect(err => {
    if (err) {
      console.error('Error connecting to database:', err.stack);
      process.exit(1); // Exit the application if unable to connect to the database
    }
    console.log('Connected to database');
  });

app.use(bodyParser.json());

// API endpoint for user registration
app.post('/register', (req, res) => {
  const { UserName, FullName, Email, PhoneNumber, Location, Job } = req.body;
  const query = `INSERT INTO User (UserName, FullName, Email, PhoneNumber, Location, Job) VALUES (?, ?, ?, ?, ?, ?)`;
  connection.query(query, [UserName, FullName, Email, PhoneNumber, Location, Job], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Failed to register user' });
    } else {
      res.status(200).json({ message: 'User registered successfully' });
    }
  });
});

// API endpoint for adding a transaction
app.post('/transactions', (req, res) => {
  const { AccountID, Date, Amount, CategoryID } = req.body;
  const query = `INSERT INTO Transaction (AccountID, Date, Amount, CategoryID) VALUES (?, ?, ?, ?)`;
  connection.query(query, [AccountID, Date, Amount, CategoryID], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Failed to add transaction' });
    } else {
      res.status(200).json({ message: 'Transaction added successfully' });
    }
  });
});

app.get('/users',(req,res) => {
  console.log("done");
  res.status(200).json({ message: 'User done' });
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});