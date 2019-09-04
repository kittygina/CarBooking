const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Booking = new Schema ({
        date: { type: Date, required: true },
        time: { type: String, required: true },
        location: { type: String, required: true },
        purpose: { type: String, required: true },
});
module.exports = mongoose.model('Booking', Booking)
