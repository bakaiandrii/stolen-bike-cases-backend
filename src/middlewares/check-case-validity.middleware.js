const {errors, CustomerErrorHandler, statusCodes} = require('../error');
const {newCaseValidator} = require('../validators');


module.exports = (req, res, next) => {
    try {
        const caseOdj = req.body;
        let {error} = newCaseValidator.validate(caseOdj);

        if (error) {
            return next(new CustomerErrorHandler(
                error.details[0].message,
                statusCodes.BAD_REQUEST,
                errors.BAD_REQUEST_NOT_VALID_CASE.code));
        }
        next();
    } catch (e) {
        next(e);
    }
}