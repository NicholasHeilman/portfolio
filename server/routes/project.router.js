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
  const newProject = req.body;
  const queryText = `INSERT INTO "projects" ("title", "description", 
                   "date_completed", "github", "tag_id", "website")                   
                  VALUES ($1, $2, $3, $4, $5, $6);`;
  const queryValues = [
                      newProject.name,
                      newProject.description,
                      newProject.date_completed,
                      newProject.github,
                      newProject.tag,
                      newProject.website,
  ];
  pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
          console.log('error in post', err);
          res.sendStatus(500);
      });
});
// router.post('/', (req, res) => {
//   console.log(req.body)
//   const queryText = `INSERT INTO "project" ( "name", "description", "thumbnail", "github","date_complete", "tag_id", "website")
//                        VALUES ($1, $2, $3, $4, $5, $6, $7)`
//   pool.query(queryText, [project.name, project.description, project.thumbnail, project.github, project.date_complete, project.tag_id, project.website])
//     .then((response) => {
//       res.sendStatus(201);
//     })
//     .catch((error) => {
//       console.log('POST Error', error);
//       res.sendStatus(500);
//     });
// });

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