const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

dotenv.config(); 

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (removed deprecated options)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    });

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

// Start server with better error handling
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ Error: Port ${PORT} is already in use.`);
        console.log(`\n💡 Solutions:`);
        console.log(`   1. Stop the other process using port ${PORT}`);
        console.log(`   2. Change the PORT in your .env file`);
        console.log(`   3. Find and kill the process: netstat -ano | findstr :${PORT}\n`);
    } else {
        console.error('Server error:', err);
    }
    process.exit(1);
});
