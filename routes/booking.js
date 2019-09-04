const express = require('express');
const router = express.Router();
const booking = require('../controllers/booking');

router.get('/', function(req, res){
    booking.index(req,res);
});

router.post('/addbooking', function(req, res) {
    booking.create(req,res);
});

router.get('/getbooking', function(req, res) {
    booking.list(req,res);
});

module.exports = router;
