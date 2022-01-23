const fs = require('fs');
const util = require('util');
const router = require('express').Router();
const notes = require('../db/db.json');

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

router.get('/notes', (req, res) => {
  readFileAsync(notes, 'utf-8')
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
