const Joi = require('joi');

const {statusEnum} = require('../config');

module.exports = Joi.object().keys({
    owner: Joi.string().trim().min(5).max(45).required(),
    description: Joi.string().min(5).max(150).required(),
    status: Joi.string().allow(statusEnum.FOUND, statusEnum.REGISTERED,statusEnum.SEARCHING),
})