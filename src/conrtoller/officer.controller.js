const {officerService} = require('../services');

module.exports = {
    createOfficer: async (req, res) => {
        try {
            const officer = await officerService.newOfficer(req.body);
            res.status(201).json(officer);
        }catch (e) {
            res.json(e);
        }
    },
}