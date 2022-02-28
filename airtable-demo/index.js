const express = require('express');
const airtable = require('./airtable');

const app = express();

const port = process.env.PORT || 4000

app.use(express.json())

app.get('/', async(_req, res) => {
  try {
    const allRecords = await airtable.getAllRecords();
    res.status(200).json(allRecords);
  } catch(error) {
    res.status(200).json({ message: error.message });
  }
})

app.listen(port, () => console.log(`visit http://localhost:${port}`))
