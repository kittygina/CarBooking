const express = require('express');
const router = express.Router();
const booking = require('../controllers/admin');

router.get('/', function(req, res){
    admin.index(req,res);
});

router.post('/addbooking', function(req, res) {
    admin.create(req,res);
});

router.get('/getbooking', function(req, res) {
    admin.list(req,res);
});

module.exports = router;
