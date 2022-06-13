const Game = require('../models/Game');

exports.find = (req, res) => {
    Game.find()
      .then(games => res.json({games: games}))
      .catch(err => res.status(404).json({ nogamesfound: 'No Games Found' }));
}

exports.findByID = (req, res) => {
    Game.find(req.params.id)
      .then(game => res.json(game))
      .catch(err => res.status(404).json({ err: err.message || 'No Game Found'}));
}

exports.post = (req, res) => {
    Game.create(req.body)
      .then(game => res.json({ msg: 'Game added successfully!' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this Game' }));
}

exports.put = (req, res) => {
    Game.findByIdAndUpdate(req.params.id, req.body)
      .then(game => res.json({ msg: 'Game Updated Successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to update Database' }));
}

exports.delete = (req, res) => {
    Game.findByIdAndRemove(req.params._id, req.body)
      .then(game => res.json({ msg: 'Game Deleted Successfully' }))
      .catch(err => res.status(400).json({ error: 'No such Game' }));
}
