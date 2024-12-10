const express = require("express");
const config = require("./config/config");
const meteorsRoutes = require("./routes/meteors-routes");
const homeRoutes = require("./routes/home-routes");
const roversRoutes = require("./routes/rovers-routes");
const errorHandler = require("./middleware/errorHandler");
const notFoundHandler = require("./middleware/notFoundHandler");
const nunjucks = require("nunjucks");

const app = express();

app.set("view engine", "html");

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.use(express.json());

app.use(meteorsRoutes);
app.use(homeRoutes);
app.use(roversRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server is running on ${config.port} port...`);
});
