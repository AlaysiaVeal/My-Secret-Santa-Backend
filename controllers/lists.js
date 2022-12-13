const { List } = require('../models')

const getAllLists = async (req, res) => {
  try {
    const lists = await List.findAll({})
    res.send(lists)
  } catch (error) {
    throw error
  }
}

const getListId = async (req, res) => {
  try {
    let listId = parseInt(req.params.list_id)
    const lists = await List.findAll({
      where: { id: listId }
    })
    res.send(lists)
  } catch (error) {
    throw error
  }
}

const createLists = async (req, res) => {
  try {
    let body = {
      ...req.body
    }
    const lists = await List.create(body)
    res.send(lists)
  } catch (error) {
    throw error
  }
}

const deleteLists = async (req, res) => {
  try {
    let listId = parseInt(req.params.list_id)
    await List.destroy({
      where: { id: listId }
    })
    res.send({ message: `deleted user with id of ${listId}` })
  } catch (error) {
    throw error
  }
}

const updatedList = async (req, res) => {
  try {
    let listId = parseInt(req.params.list_id)
    const updatedList = await List.update(req.body, {
      where: { id: listId },
      returning: true
    })
    res.send(updatedList)
  } catch (error) {
    throw error
  }
}
module.exports = {
  getAllLists,
  getListId,
  createLists,
  deleteLists,
  updatedList
}
