const botService = require("./botService");

exports.sendMessage = (req, res) => {
    let response = botService.sendMessage(req);
    return res
    .status(200)
    .json({ message: "success", response: response });
};