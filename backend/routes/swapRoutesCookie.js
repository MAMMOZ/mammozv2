// routes/swapRoutesCookie.js
const express = require('express');
const router = express.Router();
const { Swap } = require('../models/swap');
const getUser = require('../plugin/getuser');

// เพิ่มข้อมูลลง Swap
router.post('/addcookie', async (req, res) => {
    try {
        const { key, cookie, map, pc } = req.body;
        const same = await Swap.findOne({ key });
        const userData = await getUser(cookie);
        if (!userData) return
        console.log(userData.Name);
        if (!same) {
            const newSwap = new Swap({ key, cookie, bot:userData.Name, map, pc, status: 0 });
            await newSwap.save();
            res.status(200).json(newSwap);
        } else {
            await Swap.findOneAndUpdate(
                { key },
                { cookie, map, bot:userData.Name, pc },
                { new: true }
            );
            res.status(200).json("Updated");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/swapcookie', async (req, res) => {
    try {
        const { key, bot, pc, status } = req.body;
        const same = await Swap.findOne({ key, bot, pc });
        if (!same) {
            const newSwap = new Swap({ key, bot, pc, status });
            await newSwap.save();
            res.status(200).json(newSwap);
        } else {
            await Swap.findOneAndUpdate(
                { key, bot, pc },
                { status },
                { new: true }
            );
            res.status(200).json("Updated");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/updateswapcookie', async (req, res) => {
    try {
        const { key, bot, map, status } = req.body;
        const same = await Swap.findOne({ key, bot });
        if (!same) {
            const newSwap = new Swap({ key, bot, map, status });
            await newSwap.save();
            res.status(200).json(newSwap);
        } else {
            await Swap.findOneAndUpdate(
                { key, bot },
                { map, status },
                { new: true }
            );
            res.status(200).json("Updated");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/delecookie', async (req, res) => {
    try {
        const { key, pc, bot } = req.body;
        const result = await Swap.findOneAndDelete({ key, pc, bot });
        if (result) {
            res.status(200).json({ message: "Deleted" });
        } else {
            res.status(404).json({ message: "Not Found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/programget', async (req, res) => {
    try {
        const { key } = req.body;
        const result = await Swap.findOne({ key, status:0 });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Not Found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;