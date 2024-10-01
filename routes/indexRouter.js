const { Router } = require("express");
const indexRouter = Router();
const { getMessages } = require("../controller/messagesController");

indexRouter.get("/", async (req, res) => {
    const messages = await getMessages();
    res.render("index", { messages: messages });
});

module.exports = indexRouter;
