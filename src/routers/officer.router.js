const {Router} = require('express');
const officerRouter = Router();

const {officerController} = require('../conrtoller');
const {checkOfficerValidityMiddleware} = require('../middlewares');

officerRouter.post('', checkOfficerValidityMiddleware, officerController.createOfficer);

module.exports = officerRouter;