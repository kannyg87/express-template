const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));

router.use(bodyParser.json())
// or
// no need //const bodyParser = require('body-parser');
// router.use(express.urlencoded({extended: false}));

// router.use(express.json())


// let dataFile = require('../data/data.json');

router.get('/', (req, res) => {
  
    res.render('index')
})

router.post('/', (req,res) => {
    res.send('you are in a post status')
    
})
module.exports = router;
