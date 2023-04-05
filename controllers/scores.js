const { Score } = require('../models')

const create = async (req, res) => {
  try {
    req.body.profileId = req.user.profile.id
    const score = await Score.create(req.body)
    res.status(200).json(score)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
}