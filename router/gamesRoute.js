const express = require('express');
const router = express.Router();
const gamesService = require('../service/gamesService');

router.get("/games", async (req, res) => {
    const games = await gamesService.getGames();
    res.json(games);
});


module.exports = router;