const {errors, CustomerErrorHandler, statusCodes} = require('../error');
const {newOfficerValidator} = require('../validators');


module.exports = (req, res, next) => {
    try {
        const officer = req.body;
        let {error} = newOfficerValidator.validate(officer);

        if (error) {
            return next(new CustomerErrorHandler(
                error.details[0].message,
                statusCodes.BAD_REQUEST,
                errors.BAD_REQUEST_NOT_VALID_OFFICER.code));
        }
        next();
    } catch (e) {
        next(e);
    }
}