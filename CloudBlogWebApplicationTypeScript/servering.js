import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { serverLocation } from "@reach/router";
import fs from "fs";
import App from "./src/App";

const port = process.env.PORT || "4000";

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("not rendered over here");

const app = express();

app.use("/dist", express.static("dist"));

app.use((req, res) => {
  const reactMarkup = (
    <serverLocation url={req.url}>
      <App />
    </serverLocation>
  );
  res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
  res.end();
});

console.log("listening to the port number : " + port);

app.listen(port);
