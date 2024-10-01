const express = require("express");
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("path");
const assetsPath = path.join(__dirname, "public");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded());

app.use("/new", newRouter);
app.use("/", indexRouter);

const port = 8080;

app.listen(port, "127.0.0.1", () => {
    console.log(`App listening on port ${port}`);
});
