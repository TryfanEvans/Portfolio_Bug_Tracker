const express = require('express');
const router = express.Router();

const bug = require('../../models/bugSchema');

router.get('/', (req, res) => {
    bug.find()
        .then(bug => res.json(bug));
})

router.delete('/:id', (req, res) => {
    bug.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

router.patch('/:id', (req, res) => {
    bug.findByIdAndUpdate(req.params.id, { status: req.body.status })
        .then((result) => {
            res.json(result);
            console.log(req);
        })
        .catch((err) => {
            console.error(req);
            console.log(req)
        });
})

router.post('/', (req, res) => {
    const newBug = new bug({
        title: req.body.title,
        desc: req.body.desc,
        severity: req.body.severity
    })
    console.log(req.body.severity)
    newBug.save().then(newBug => res.json(newBug));
})

module.exports = router;