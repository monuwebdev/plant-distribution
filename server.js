const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

// Database
const dbFile = process.env.DB_FILE || "./database.sqlite";
const db = new sqlite3.Database(dbFile);

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Example plants
app.get("/api/plants", (req, res) => {
  res.json([
    { id: 1, name: "Neem", price: 5 },
    { id: 2, name: "Tulsi", price: 5 },
    { id: 3, name: "Peepal", price: 5 }
  ]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}`));
