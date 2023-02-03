const express = require('express');

const PhotoModel = require('../models/photo.model');

const router = express.Router();

router.get('/all', (req, res) => {
  let result = PhotoModel.getAll();
  res.status(200).send(result);
})

router.post('/', (req, res) => {
  const data = req.body;
  let result = PhotoModel.create(data);
  res.status(201).send(data);
})

module.exports = router;