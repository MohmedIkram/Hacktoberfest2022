const express = require("express");
const { getUrlsCollection } = require("./util");

const app = express();
const port = 3001;

const urls = getUrlsCollection();

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.post("/", ({ body }, res) => {
  if (!body?.long || !body?.short)
    return res.status(400).send("No valid URL object provided");

  urls.insertOne(body);

  return res.status(201).send("Inserted a new URL to the db");
});

app.get("/:shortUrl", async ({ params }, res) => {
  const { shortUrl } = params;
  const url = await urls.findOne({ short: shortUrl });

  return res.status(200).send(url);
});

app.listen(port, () => console.log(`Server running on port: ${port}`));
