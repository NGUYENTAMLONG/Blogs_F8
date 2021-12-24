const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const path = require("path");
const reload = require("reload"); //Import Thu vien dung de auto reload page khi co su thay doi
// Auto reload
reload(app);
// HTTP logger
app.use(morgan("combined")); //thu vien morgan dung de log ra http request tu client -> server
// Template engine
app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/resources/views"));

//set port
const PORT = process.env.PORT || 3001;
app.get("/", (req, res) => {
  // res.send(
  //   "<h1 style='color:crimson;background-color:yellow;'>Hello World ^^ !!!</h1>"
  // );
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
// config imagesPath
app.use(express.static(path.join(__dirname, "public")));
// console.log(path.join(__dirname, "public"));// C:\CODE\API\Blog_F8\src\public

// listen on PORT
app.listen(PORT, () => console.log(`Server is runnng on PORT: ${PORT} ^^ !!!`));
