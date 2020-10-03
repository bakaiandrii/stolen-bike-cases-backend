const path = require('path');

const {statusEnum} = require('../../config');

module.exports = (sequelize, DataTypes) => {
    const Case = sequelize.define('Case',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        owner:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: statusEnum.REGISTERED
        },
        dataOfEvent:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: new Date().toISOString()
        },
        officer_id:{
            foreignKey: true,
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    },{
        tableName: 'cases',
        timestamps: false
    });
    const Officer = require(path.join(process.cwd(), 'database', 'models', 'Officer'))(sequelize, DataTypes);
    Case.belongsTo(Officer, {foreignKey: 'officer_id'});

    return Case;
}