const connection = require('../database').getInstance();

const {statusEnum} = require('../config');

module.exports = {
    newCase: async (caseObj) => {
        const Case = connection.getModels('Case');
        return Case.create(caseObj, {new: true});
    },
    findAll: async () => {
        const Case = connection.getModels('Case');
        return Case.findAll({});
    },
    getId: async (owner) => {
        const Case = connection.getModels('Case');
        return Case.findOne({
            where: {owner}
        })
    },
    findNewUnassignedCase: async () => {
        const Case = connection.getModels('Case');
        return Case.findOne({
            where: {status: statusEnum.REGISTERED}
        })
    },
    findOfficerIdById: async (id) => {
        const Case = connection.getModels('Case');
        return Case.findOne({
            where: {id}
        })
    },
    updateCaseStatusForFound: async (id) => {
        const Case = connection.getModels('Case');
        return Case.update({
            status: statusEnum.FOUND
        },{
            where:{id}
        })
    },
    updateCaseStatusAndOfficerId: async (id, officer_id) => {
        const Case = connection.getModels('Case');
        return Case.update({
            status: statusEnum.SEARCHING,
            officer_id
        },{
            where:{id}
        })
    },
}
