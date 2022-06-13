const express = require('express');
const router = express.Router();

const Game = require('../../models/Game')

const GameController = require('../../controller/gameController');

// Test route
router.get('/test', (req, res) => res.send('game route testing'));

// Find all games
router.get('/', GameController.find)

// Find a game by ID
router.get('/:id', GameController.findByID)

// Add a new game
router.post('/', GameController.post)

// Edit an existing game
router.put('/:id', GameController.put)

// Delete an existing game
router.delete('/:id', GameController.delete)

module.exports = router;