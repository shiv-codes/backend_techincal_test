const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../db/index')

const SessionTokens = sequelize.define('SessionTokens', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    accessToken: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: true
});

SessionTokens.sync();

module.exports = SessionTokens;