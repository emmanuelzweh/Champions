const express = require('express');
const router = express.Router();

router.get('/chemist', (req, res) => {
    res.render('chemist', {title: "Chemist"})
})

router.get('/agriculturalist', (req, res) => {
    res.render('agriculturalist', {title: "Agriculturalists"})
})

router.get('/civil', (req, res) => {
    res.render('civil', {title: "Civil engineers"})
})

router.get('/geologist', (req, res) => {
    res.render('geologist', {title: "Geologists"})
})

router.get('/computer', (req, res) => {
    res.render('computer', {title: "Computer Scientists"})
})

router.get('/electrician', (req, res) => {
    res.render('electrician', {title: "Electrical engineers"})
})

module.exports = router;
