const botRouter = require("express").Router();
const {validate, ValidationError} = require('express-validation')
const botController = require('./botController');
const botValidations = require("./validation");


botRouter.post(
    "/",validate(botValidations.botMessage, {}, {}),
    botController.sendMessage
);

botRouter.get('/',(req,res)=>{
    console.log("welcome to bot Router");
})
botRouter.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
    return res.status(500).json(err)
  })
module.exports = botRouter;