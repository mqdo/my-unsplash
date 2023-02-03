const express = require('express');

const PhotoModel = require('../models/photo.model');

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    let result = await PhotoModel.getAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message || err);
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    let result = await PhotoModel.get(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message || err);
  }
});

router.get('/', async (req, res) => {
  const label = req.query.label;
  try {
    let result = await PhotoModel.getByLabel(label);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err.message || err);
  }
});

router.post('/', (req, res) => {
  const data = req.body;
  let result = PhotoModel.create(data);
  res.status(201).json(data);
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    let result = await PhotoModel.delete(id);
    res.status(204).json(result);
  } catch (err) {
    res.status(500).send(err.message || err);
  }
});

module.exports = router;