const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();

// return all projects
router.get('/', (req, res) => {
  res.sendStatus(200);
  const queryText = `SELECT * FROM "projects" ORDER BY "id" ASC`;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`GET Error ${error}`);
      res.sendStatus(500);
    });

});

// add a new project
router.post('/', (req, res) => {
  const fav = req.body
  console.log(req.body)
  const queryText = `INSERT INTO "project" ( "name", "description", "thumbnail", "github","date_complete", "tag_id")
                       VALUES ($1, $2, $3, $4, $5, $6)`
  pool.query(queryText, [project.name, project.description, project.thumbnail, project.github, project.date_complete, project.tag_id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`POST Error ${error}`);
      res.sendStatus(500);
    });
});

// delete a project
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
