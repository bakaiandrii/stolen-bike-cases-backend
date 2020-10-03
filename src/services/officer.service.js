const connection = require('../database').getInstance();

const {statusEnum} = require('../config');

module.exports = {
    newOfficer: async (officerObj) => {
        const Officer = connection.getModels('Officer');
        return Officer.create(officerObj, {new: true});
    },
    findFreeOfficer: async () => {
        const Officer = connection.getModels('Officer');
        return Officer.findOne({
            where: {status: statusEnum.FREE}
        })
    },
    findOfficerId: async (caseId) => {
        const Officer = connection.getModels('Officer');
        return Officer.findOne({
            where: {caseId}
        })
    },
    updateOfficerCaseId: async (officerId, caseId) => {
        const Officer = connection.getModels('Officer');
        return Officer.update({
            status: statusEnum.WORKS,
            caseId
        },{
            where: {id: officerId},
            returning: true,
            plain: true
        },
            )
    },
    updateOfficerStatus: async (id, status, caseId) => {
    const Officer = connection.getModels('Officer');
    return Officer.update({
            status,
            caseId
        },{
            where: {id},
            returning: true,
            plain: true
        },
    )
},
}