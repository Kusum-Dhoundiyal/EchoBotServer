const {Joi } = require('express-validation')
module.exports.botMessage = {
    body: Joi.object({
        botKey: Joi.string().required(),
        message:Joi.string().required()
    }),
  }
