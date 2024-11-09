// routes/fischlRoutes.js
const express = require('express');

// เพิ่มข้อมูลลง Fischl
router.post('/addcookie', async (req, res) => {
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

router.post('/swapcookie', async (req, res) => {
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


router.post('/updateswapcookie', async (req, res) => {
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


router.post('/delecookie', async (req, res) => {
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