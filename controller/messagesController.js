const fs = require("fs");
const messages = require("../messages.json");

const getMessages = async () => {
    return messages;
};

const addMessage = (newMessage) => {
    console.log(newMessage);
    messages.push(newMessage);
    const json = JSON.stringify(messages);
    fs.writeFile("./messages.json", json, (error) => {
        if (error) {
            console.log("An error has occurred ", error);
            return;
        }
        console.log("Data written successfully to disk");
    });
};

module.exports = { getMessages, addMessage };
