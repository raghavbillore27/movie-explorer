const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`;

// Get movies
router.get('/', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`${API_ENDPOINT}&s=${query}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get movie by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${API_ENDPOINT}&i=${id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
