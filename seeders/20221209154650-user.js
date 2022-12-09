'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'Johndoe@example.com',
          username: 'John doe',
          password: 1234,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'Janedoe@example.com',
          username: 'Jane doe',
          password: 123,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'Jonnydoe@example.com',
          username: 'Jonny doe',
          password: 12345,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
