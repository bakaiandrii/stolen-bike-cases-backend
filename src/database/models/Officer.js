const {statusEnum} = require('../../config');

module.exports = (sequelize, DataTypes) => {
    const Officer = sequelize.define('Officer',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            defaultValue: statusEnum.FREE
        },
        caseId:{
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
    },{
        tableName: 'officers',
        timestamps: false
    });
    return Officer;
}