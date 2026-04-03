const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;
const APP_NAME = process.env.APP_NAME || "DevOps Project Backend";

// Setup mongoose schema
const phoneSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number
});

const Phone = mongoose.model("Phone", phoneSchema);

// DB Connection
if (DB_URL) {
  mongoose.connect(DB_URL)
    .then(() => console.log(`Connected to MongoDB for ${APP_NAME}`))
    .catch(err => console.error("Could not connect to MongoDB:", err));
} else {
  console.warn("No DB_URL provided in environment. App will boot, but database operations will fail.");
}

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/phones", async (req, res) => {
  try {
    const phones = await Phone.find();
    res.json(phones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/phones", async (req, res) => {
  try {
    const newPhone = new Phone(req.body);
    await newPhone.save();
    res.status(201).json(newPhone);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`${APP_NAME} is running on port ${PORT}`);
});
