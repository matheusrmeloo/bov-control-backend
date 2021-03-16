const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

import routes from "../routes";
app.use(express.urlencoded({ extended: false }))

app.use(express.json())

for(let route of routes){
  app[route.method](`/api${route.path}`, !route.middlewares ? [] : route.middlewares, route.route);
}
app.listen(PORT, async () => {
  console.log(`express  port ${PORT}`);
});

module.exports = app;