const Joi = require('joi');

const {statusEnum} = require('../config');

module.exports = Joi.object().keys({
    name: Joi.string().min(5).max(45).required(),
    status: Joi.string().allow(statusEnum.FREE, statusEnum.WORKS),
})