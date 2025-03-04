const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    type: { type: String, enum: ["income", "expense"], required: true },
    date: { type: Date, default: Date.now },
    paymentMethod: { type: String },
    notes: { type: String }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
