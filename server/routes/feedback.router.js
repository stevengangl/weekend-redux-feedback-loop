const express = require('express')
const router = express.Router();
const pool = require('../modules/pool.js')

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
router.post('/', (req, res) => {
    const newPost = req.body;

    console.log('in POST request server', newPost)
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;

    pool
        .query(sqlText, [newPost.feeling[0], newPost.understanding[0], newPost.support[0], newPost.comments[0]])
        .then((result) => {
            res.sendStatus(201);
            console.log('post after pool query')
        })
        .catch((error) => {
            // console.log('erroe making query', error)
            res.sendStatus(500);
        })
})

module.exports = router;