const {Router} = require('express');
const caseRouter = Router();

const {caseController} = require('../conrtoller');
const {checkCaseValidityMiddleware} = require('../middlewares');

caseRouter.post('', checkCaseValidityMiddleware, caseController.createCase);
caseRouter.get('/', caseController.getAll);
caseRouter.get('/:id/resolve', caseController.resolveCase);

module.exports = caseRouter;
