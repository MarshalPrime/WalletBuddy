// server.js

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || 3000;

// Database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Godblessabayo@1",
  database: "walletbuddy",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.stack);
    process.exit(1); // Exit the application if unable to connect to the database
  }
  console.log("Connected to database");
});

app.use(bodyParser.json());

// API endpoint for user registration
app.post("/register", (req, res) => {
  const { UserName, FullName, Email, Password, PhoneNumber, Location, Job } =
    req.body;
  const query = `INSERT INTO User (UserName, FullName, Email, Password, PhoneNumber, Location, Job) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  connection.query(
    query,
    [UserName, FullName, Email, Password, PhoneNumber, Location, Job],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Failed to register user" });
        console.log(err);
      } else {
        res.status(200).json({ message: "User registered successfully" });
      }
    }
  );
});

// API endpoint for user login
app.post("/login", (req, res) => {
  const { Email, Password } = req.body;
  const query = `SELECT UserID FROM User WHERE Email = ? AND Password = ?`;
  connection.query(query, [Email, Password], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Failed to login" });
    } else if (results.length === 0) {
      res.status(401).json({ error: "Invalid email or password" });
    } else {
      const userID = results[0].UserID;
      // Pass user ID to the next middleware
      req.userID = userID;
      res.status(200).json({ message: "Login successful", userID });
    }
  });
});

// API endpoint for creating an account
app.post("/accounts", (req, res) => {
  const { AccountName, userID} = req.body;
  //const userid = req.userID; // Assuming userID is obtained from the login process
  console.log("user", userID);
  const accountQuery = `INSERT INTO Account (AccountName, UserID) VALUES (?, ?)`;
  connection.query(
    accountQuery,
    [AccountName, userID],
    (err, accountResult) => {
      if (err) {
        res.status(500).json({ error: "Failed to create account " });
        console.log(err);
        console.log("UserID failed:", userid);
      } else {
        res
          .status(200)
          .json({ message: "Account created successfully" });
      }
    }
  );
});


// API endpoint for adding a transaction
app.post("/transactions", (req, res) => {
  const { AccountID, Date, Amount, CategoryID } = req.body;

  // Query to retrieve account name
  const selectAcc = `SELECT AccountName FROM Account WHERE AccountID = ?`;

  connection.query(selectAcc, [AccountID], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Failed to retrieve account name" });
      console.log(err);
    } else {
      if (results.length > 0) {
        // Account found, proceed with transaction insertion
        const accountName = results[0].AccountName;
        console.log(accountName)
        const query = `INSERT INTO Transaction (AccountID, AccountName, Date, Amount, CategoryID) VALUES (?, ?, ?, ?, ?)`;
        connection.query(
          query,
          [AccountID, accountName, Date, Amount, CategoryID],
          (err, result) => {
            if (err) {
              res.status(500).json({ error: "Failed to add transaction" });
              console.log(err);
            } else {
              res.status(200).json({ message: "Transaction added successfully" });
            }
          }
        );
      } else {
        // No account found for the given AccountID
        res.status(404).json({ error: "Account not found" });
        console.log(err);
      }
    }
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
