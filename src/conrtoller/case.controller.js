const {caseService, officerService} = require('../services');

const {statusEnum} = require('../config');

module.exports = {
    createCase: async (req, res) => {
        try {
            const officer = await officerService.findFreeOfficer();

            if (!officer) {
                const caseObj = await caseService.newCase(req.body);
                return res.status(201).json(caseObj);
            }

            const {id: officer_id} = officer;
            req.body.status = statusEnum.SEARCHING;
            const caseObj = await caseService.newCase({...req.body, officer_id});

            const {id: caseId} = await caseService.getId(req.body.owner);
            await officerService.updateOfficerCaseId(officer.id, caseId);
            res.status(201).json(caseObj);
        } catch (e) {
            res.json(e);
        }
    },
    getAll: async (req, res) => {
        try {
            const cases = await caseService.findAll();
            res.status(201).json(cases);
        } catch (e) {
            res.json(e);
        }
    },
    resolveCase: async (req, res) => {
        try {
            const id = req.params.id;
            await caseService.updateCaseStatusForFound(id);
            const resolveObj = await caseService.findOfficerIdById(id);
            await officerService.updateOfficerStatus(resolveObj.officer_id, statusEnum.FREE, statusEnum.ZERO_CASE);

            const newCase = await caseService.findNewUnassignedCase();

            if(newCase){
                await officerService.updateOfficerStatus(resolveObj.officer_id, statusEnum.WORKS, newCase.id);
                const officer = await officerService.findOfficerId(newCase.id);
                await caseService.updateCaseStatusAndOfficerId(newCase.id, officer.id);
            }

            // const officer = await officerService.updateOfficerStatus(caseObj.id, statusEnum.FREE);
            res.status(201).json(newCase);

        }catch (e) {
            res.json(e);
        }
    }
}
