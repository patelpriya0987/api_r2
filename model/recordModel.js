const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    status: {
        type: Boolean,
        required: true
    },
    created_date: {
        type: String,
    },
    updated_date: {
        type: String
    }
});

const recordModel = mongoose.model('recordModel', recordSchema);

module.exports = recordModel;