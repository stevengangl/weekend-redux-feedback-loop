const express = require('express')
const router = express.Router();
const pool = require('../modules/pool')

//Made this get request...not sure what it needs to get
//Get Route
router.get('/', (req, res) => {
    console.log('in get request');
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    })
})


//Post Route
router.post('/', (req,res) => {
    const newPost = req.body;

    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;

    pool
    .query(sqlText, [newPost.feeling, newPost.understanding, newPost.support, newPost.comments])
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        res.sendStatus(500);
    })
})

module.exports = router;