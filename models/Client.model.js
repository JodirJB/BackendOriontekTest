const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    client: { type: String, required: true },
    address: { type: String, required: true },
    createAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Client', ClientSchema);