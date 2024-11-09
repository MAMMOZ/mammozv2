// routes/fischlRoutes.js
const express = require('express');
const router = express.Router();
const Fischl = require('../models/fischl');

// เพิ่มข้อมูลลง Fischl
router.get('/fischl', async (req, res) => {
    try {
        res.status(200).json("Update");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// เพิ่มข้อมูลลง Fischl
router.post('/addfischl', async (req, res) => {
    try {
        const { key, bot, gold, enchantrelic, boom, rod, map, status } = req.body;
        const same = await Fischl.findOne({ key: key, bot: bot });
        if (!same) {
            const newFischl = new Fischl({ key, bot, gold, enchantrelic, boom, rod, map, status });
            await newFischl.save();
            res.status(200).json(newFischl);
        } else {
            await Fischl.findOneAndUpdate(
                { key: key, bot: bot },
                { gold, enchantrelic, boom, rod, map, status },
                { new: true }
            );
            res.status(200).json("Update");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET Log TRADE
router.post('/getfischllog', async (req, res) => {
    try {
        const { key } = req.body;
        const loades = await Fischl.find({ key }).sort({ "_id": -1 });

        let totalGem = 0;
        let totalRr = 0;
        let totalAdb = 0;

        loades.forEach(item => {
            totalGem += item.gem || 0;
            totalRr += item.rr || 0;
        });

        res.status(200).json({
            data: loades,
            totalGem,
            totalRr,
            totalAdb
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
