'use strict'

const user = require('../models/user')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'lists',
      [
        {
          userId: 1,
          list: ['shoes', 'shirt', 'bow'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          list: ['shoes, chocolate'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          list: ['shirt', 'truffles'],
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lists', null, {})
  }
}
