const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8000;
const path = require("path");
const handlebars = require("express-handlebars");

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));
console.log("123123", path.join(__dirname, "resources/views"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({ defaultLayout: "main", extname: ".hbs" })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home", {
    showTitle: true,
    helpers: {
      foo() {
        return "foo.";
      },
    },
  });
});

app.get("/news", (req, res) => {
  res.render("news", {
    showTitle: true,
    helpers: {
      foo() {
        return "foo.";
      },
    },
  });
});

app.listen(port, () => {
  console.log("Example app listen on port : ", port);
});
