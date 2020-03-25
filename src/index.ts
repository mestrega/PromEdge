import express from 'express';
import getDataFile from './helpers/getDataFile';

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  const file = getDataFile().then(response => res.send(response));
});

app.listen( port, () => {
  console.log(`Server running at http://localhost:${port}/`);
})