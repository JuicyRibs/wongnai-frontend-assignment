const express = require("express");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(cors());

app.get("/api/trips", async function (req, res) {
  var trips, responseData;
  var query =
    typeof req.query.keyword !== "undefined"
      ? JSON.parse(req.query.keyword)
      : "";
  console.log(`[API-GATEWAY] : Got Request with ${query}`);

  await axios
    .get(`${process.env.JSON_SERVER_URL}/trips`)
    .then((res) => {
      trips = res.data;
    })
    .catch((err) => {
      console.error("[JSON-SERVER] : " + err);
    });

  responseData = trips.filter(
    (trip) =>
      trip.title.includes(query) ||
      trip.description.includes(query) ||
      trip.tags.includes(query)
  );

  console.log(responseData)

  res.status(200).json({ trips: responseData });
});

app.listen(process.env.PORT, function () {
  console.log(
    `[API-GATEWAY] : Server Started in ${process.env.NODE_ENV} mode. Port : ${process.env.PORT}`
  );
});