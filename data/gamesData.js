const database = require('../infra/database');


exports.getGames =  () => {
    return database.query('SELECT * FROM game');
}

exports.saveGames = (game) => {
    return database.one('INSERT INTO game (title_game, description_game) VALUES ($1, $2) RETURNING *', [game.title, game.description]);
}

exports.deleteGames = (id) => {
 return database.none('DELETE FROM game WHERE id = $1', [id]);
}