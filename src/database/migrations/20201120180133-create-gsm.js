'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("gsms", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            min: {
                type: Sequelize.STRING
            },
            hour: {
                type: Sequelize.STRING
            },
            day: {
                type: Sequelize.STRING
            },
            month: {
                type: Sequelize.STRING
            },
            year: {
                type: Sequelize.STRING
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        })
    },

    down: async(queryInterface, Sequelize) => {

        return queryInterface.dropTable('gsms');

    }
};