const express = require('express');
const econo = require('../public/allEconomy')
const router = new express.Router();


router.get('/economy', (req, res) => {
    try{
        res.json(econo);
    }catch (e){
        res.send(e);
    }
    
})

module.exports = router;