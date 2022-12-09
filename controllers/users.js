const { User } = require('../models')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const getUserId = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const users = await User.findAll({
      where: { id: userId }
    })
    res.send(users)
  } catch (error) {
    throw error
  }
}

const createUsers = async (req, res) => {
  try {
    let body = { ...req.body }
    const users = await User.create(body)
    res.send(users)
  } catch (error) {
    throw error
  }
}

const deleteUsers = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({
      where: { id: userId }
    })
    res.send({ message: `deleted user with id of ${userId}` })
  } catch (error) {
    throw error
  }
}

const updateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}
module.exports = {
  getAllUsers,
  getUserId,
  createUsers,
  deleteUsers,
  updateUser
}
