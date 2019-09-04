const path = require('path');
const Booking = require('../models/booking');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/booking.html'));
};

exports.create = function (req, res) {
    var newBooking = new Booking(req.body);
    console.log(req.body);
    newBooking.save(function (err) {
            if(err) {
            res.status(400).send('Unable to save booking to database');
        } else {
            res.redirect('/booking/getbooking');
        }
  });
               };

exports.list = function (req, res) {
        Booking.find({}).exec(function (err, booking) {
                if (err) {
                        return res.send(500, err);
                }
                res.render('getbooking', {
                        booking: booking
             });
        });
};
