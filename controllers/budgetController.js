const Budget = require("../models/Budget");

exports.createBudget = async (req, res) => {
    try {
        const { category, limit, month } = req.body;
        const budget = new Budget({ userId: req.user.id, category, limit, spent: 0, month });
        await budget.save();
        res.status(201).json(budget);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find({ userId: req.user.id });
        res.json(budgets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
