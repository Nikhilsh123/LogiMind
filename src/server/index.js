const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ailogistics", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Username, email, and password are required." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Username or email already exists." });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({}, "username email");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    const user = await User.findOne({ email, password }); // Directly match email and password
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
