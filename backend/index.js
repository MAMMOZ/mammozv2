// index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const fischlRoutes = require('./routes/fischlRoutes');
const swapRoutesCookie = require('./routes/swapRoutesCookie');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// เชื่อมต่อกับ MongoDB
connectDB();

// ใช้งาน route
app.use('/api', fischlRoutes);
app.use('/swap', swapRoutesCookie);

app.get('/', (req, res) => {
    res.status(200).json({ message: "message" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
