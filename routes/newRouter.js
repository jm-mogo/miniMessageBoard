const { Router } = require("express");
const newRouter = Router();

const { addMessage } = require("../controller/messagesController");

newRouter.get("/", (req, res) => {
    res.render("new");
});

newRouter.post("/", async (req, res) => {
    addMessage(req.body);
    res.redirect("/");
});

module.exports = newRouter;
