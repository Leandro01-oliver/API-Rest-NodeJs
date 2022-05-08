const gamesData = require('../data/gamesData');


exports.getGames =  () => {
  return gamesData.getGames();
}

exports.saveGames = (game) => {
    return gamesData.saveGames(game);
}

exports.deleteGames = (id) => {
    return gamesData.deleteGames(id);
}