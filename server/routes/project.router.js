const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// return all projects
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM projects`;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log('GET Error', error);
      res.sendStatus(500);
    });
});

// add a new project
router.post('/', (req, res) => {
  const project = req.body;
  const insertArray = [
          project.name, 
          project.description, 
          project.thumbnail, 
          project.website, 
          project.github,
          project.date_completed,
          project.tag_id
  ];
  const queryText = `
  INSERT INTO projects
      (name, description, thumbnail, website, github, date_completed, tag_id)
      VALUES
      ($1, $2, $3, $4, $5, $6, $7);
  `;
  pool.query(queryText, insertArray).then((response) => {
      res.sendStatus(201);
  }).catch((error) => {
      console.log(`Server error in route POST /project, ${error}`);
      res.sendStatus(500);
  });
});

// delete a project
router.delete('/:id', (req, res) => {
  console.log('error in delete router', req.params);
    const queryText = `DELETE FROM "projects" 
                       WHERE id = $1;`;
      pool.query(queryText, [req.params.id])
      .then(()=>{
    res.sendStatus(200);
  }).catch(error =>{
    alert('There is something wrong with server');
    res.sendStatus(500)
  })                   
})

module.exports = router;