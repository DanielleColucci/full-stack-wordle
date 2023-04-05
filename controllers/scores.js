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

const modeIndex = async (req, res) => {
  try {
    const scores = await Score.findAll({
      where: {
        profileId: req.user.profile.id,
        mode: req.params.mode
      }
    })
    res.status(200).json(scores)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  modeIndex,
}