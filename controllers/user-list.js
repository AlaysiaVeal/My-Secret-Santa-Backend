const { User_list } = require('../models')

const getAllUsersList = async (req, res) => {
  try {
    const users = await User_list.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const getUserListId = async (req, res) => {
  try {
    let userlistId = parseInt(req.params.user_lists_id)
    const users = await User_list.findAll({
      where: { id: userlistId }
    })
    res.send(users)
  } catch (error) {
    throw error
  }
}

const createUsersList = async (req, res) => {
  try {
    let body = {
      ...req.body
    }
    const users = await User_list.create(body)
    res.send(users)
  } catch (error) {
    throw error
  }
}

const deleteUsersList = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_lists_id)
    await User_list.destroy({
      where: { id: userId }
    })
    res.send({ message: `deleted user with id of ${userId}` })
  } catch (error) {
    throw error
  }
}

const updateUserList = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_lists_id)
    const updatedUser = await User_list.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}
module.exports = {
  getAllUsersList,
  getUserListId,
  createUsersList,
  deleteUsersList,
  updateUserList
}
