const Transaction = require("../models/Transaction");

exports.createTransaction = async (req, res) => {
    try {
        const { amount, category, type, date, paymentMethod, notes } = req.body;
        const transaction = new Transaction({ userId: req.user.id, amount, category, type, date, paymentMethod, notes });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.id }).sort({ date: -1 });
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
