const { Schema, model } = require("mongoose");

const bromaSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    número: {
        type: Number,
        required: true
    }
    
});

module.exports = model("Broma", bromaSchema);