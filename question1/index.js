const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;
  try {
    const urlsArray = urls.split(',');
    const numbersSet = new Set();
    await Promise.all(urlsArray.map(async (url) => {
      const response = await axios.get(url);
      response.data.numbers.forEach(number => numbersSet.add(number));
    }));
    const combinedNumbers = Array.from(numbersSet).sort((a, b) => a - b);
    const result = { "numbers": combinedNumbers };
    res.json(result);
  } catch (error) {
    res.status(500).send('Error fetching data.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
