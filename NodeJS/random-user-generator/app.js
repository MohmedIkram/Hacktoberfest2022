import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.get('/user', async (req, res) => {
  const response = await fetch('https://randomuser.me/api/');
  const data = response.body;

  res.send(data);
});

app.listen(port, () => console.log(`server is listening on ${port}`));
