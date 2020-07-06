const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pollendataSchema = new Schema({
    username: String,
    password: String,
    googleID: String
    
}, {
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
});

const pollenData = mongoose.model("pollenData", pollendataSchema);

module.exports = User;