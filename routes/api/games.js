const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const Game = require('../../models/Game')

router.get('/test', (req, res) => res.send('game route testing'));

router.get('/', (req, res) => {
    Game.find()
      .then(games => res.json(games))
      .catch(err => res.status(404).json({ nogamesfound: 'No Games Found' }));
});

router.get('/:id', (req,res) => {
    Game.findByID(req.params.id)
      .then(game => res.json(game))
      .catch(err => res.status(404).json({ nogamefound: 'No Game Found' }));
});

router.post('/', (req, res) => {
    Game.create(req.body)
      .then(game => res.json({ msg: 'Game added successfully!' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this Game' }));
});

router.put('/:id', (req, res) => {
    Game.findByIDAndUpdate(req.params.id, req.body)
      .then(game => res.json({ msg: 'Game Updated Successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to update Database' }));
});

router.delete('/:id', (req, res) => {
    Game.findByIDAndRemove(req.params.id, req.body)
    .then(game => res.json({ msg: 'Game Deleted Successfully' }))
    .catch(err => res.status(400).json({ error: 'No such Game' }));
});

module.exports - router;