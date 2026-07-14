const path = require("path")
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // MUST come before connectDB()

const phoneRoutes = require("./routes/phoneRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/phones", phoneRoutes);

// API endpoint to get all phones
app.use(
    "/images",
    express.static(path.join(__dirname, "../frontend/images"))
);

// Home route
app.get("/", (req, res) => {
    res.send("Phone Finder API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
