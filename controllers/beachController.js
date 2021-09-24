const express = require('express');
const router = express.Router();
const db = require('../models/index.js');

//Index Route
router.get('/', (req, res) => {
    db.Beach.find({ user: req.session.currentUser._id }, (err, allBeach) => {
        if (err) return console.log(err);
        res.render('beaches/beachIndex.ejs', {
            allBeach: allBeach,
            oneUser: req.session.currentUser._id
        })
    })
})

//New Route
router.get('/new', (req, res) => {
    res.render('beaches/beachNew.ejs', {
        oneUser: req.session.currentUser._id
    })
})

//Create Route
router.post('/', (req, res) => {
    console.log(req.session);
    req.body.user = req.session.currentUser._id;
    db.Beach.create(req.body, (err, createdBeach) => {
        if (err) return console.log(err);
        res.redirect('/beach')
  })
})

//Show Route 
router.get('/:beachId', (req, res) => {
    db.Beach.findById(req.params.beachId, (err, singleBeach) => {
        if (err) return console.log(err);
            res.render('beaches/beachShow.ejs', {
                singleBeach: singleBeach,
                oneUser: req.session.currentUser._id
            })
    })
})

//Edit Route 
router.get('/:beachId/edit', (req, res) => {
    beachId = req.params.beachId
    db.Beach.findById(beachId, (err, foundBeach) => {
        if (err) return console.log(err);
        res.render('beaches/beachEdit.ejs', {
            oneBeach: foundBeach,
            oneUser: req.session.currentUser._id
        })
    })
})

//Update Route --> DONE 
router.put('/:beachId', (req,res) => {
   db.Beach.findByIdAndUpdate(req.params.beachId, req.body, (err, foundBeach) => {
       if (err) return console.log(err)
       res.redirect(`/beach/${req.params.beachId}`)
   })
})

//DeleteRoute
router.delete('/:beachId', (req, res) => {
    const beachId = req.params.beachId;
    db.Beach.findByIdAndDelete(beachId, (err) => {
        if (err) return console.log(err)
        res.redirect('/beach');
    })
})

module.exports = router;