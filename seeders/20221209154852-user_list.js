'use strict'

const list = require('../models/list')
const user = require('../models/user')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user_lists',
      [
        {
          userId: 1,
          listId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          listId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          listId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_lists', null, {})
  }
}
