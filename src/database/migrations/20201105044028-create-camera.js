'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("cameras", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            ip: {
                type: Sequelize.INTEGER,
            },
            quantity: {
                type: Sequelize.INTEGER
            },
            file_name: {
                type: Sequelize.STRING
            },
            size: {
                type: Sequelize.INTEGER
            },
            url: {
                type: Sequelize.STRING
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

        return queryInterface.dropTable('cameras');

    }
};