const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const fischlSchema = new mongoose.Schema({
    key: String,
    bot: String,
    gold: Number,
    enchantrelic: Number,
    boom: Number,
    rod: String,
    map: Number,
    status: Number
});
const Fischl = mongoose.model('Fischl', fischlSchema);

app.use(bodyParser.json());


// เพิ่มข้อมูลลง Fischl
app.post('/addfischl', async (req, res) => {
    try {
        const { key, bot, gold, enchantrelic, boom, rod, map, status  } = req.body;
        const same = await Fischl.findOne({ key: key, bot: bot });
        if (!same){
            const newFischl = new Fischl({ key, bot, gold, enchantrelic, boom, rod, map, status });
            await newFischl.save();
            res.status(200).json(newFischl);
        }else{
            await Fischl.findOneAndUpdate(
                { key: key, bot: bot },
                { 
                    gold: gold, 
                    enchantrelic: enchantrelic, 
                    boom: boom, 
                    rod: rod, 
                    map: map, 
                    status: status 
                },
                { new: true }
            );
            res.status(200).json("Update");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// GET Log TRADE
app.post('/getfischllog', async (req, res) => {
    try {
        const { key } = req.body;
        const loades = await Fischl.find({ key: key }).sort({"_id" :-1});

        let totalGem = 0;
        let totalRr = 0;
        let totalAdb = 0;

        loades.forEach(item => {
            totalGem += item.gem;
            totalRr += item.rr;
        });
        
        res.status(200).json({
            data: loades,
            totalGem: totalGem,
            totalRr: totalRr,
            totalAdb: totalAdb
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});