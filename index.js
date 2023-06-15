const express = require("express");
const mongoose = require("mongoose");
const authrouter = require("./modules/auth/routes/index");
const cors = require("cors");
const { SERVER_CONFIG, DATABASE_CONFIG } = require("./config");
const PORT = SERVER_CONFIG.port;
const app = express();

app.use(cors());
app.use(express.json());
app.use(authrouter);

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(PORT, () => {
  console.log(`listening on ${PORT} for requests`);
  mongoose.connect(DATABASE_CONFIG.url).then(() => {
    console.log(`connected to mongodb database :${DATABASE_CONFIG.dbname}`);
  });
});
