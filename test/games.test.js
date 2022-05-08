const crypto = require('crypto');
const axios = require('axios');
const gamesService = require('../service/gamesService');

const generate = ()=>{
   return crypto.randomBytes(10).toString('hex');
};

test('Should get posts', async()=>{
    // given - dado que
    const games1 = await gamesService.saveGames({title: generate(), description: generate()});
    const games2 = await gamesService.saveGames({title: generate(), description: generate()});
    const games3 = await gamesService.saveGames({title: generate(), description: generate()});
    //when - quando acontecer 
   const res = await axios({
       url:'http://localhost:3000/games',
       method:'GET'
   })
  const games = res.data;
  //then - então
  expect(games).toHaveLength(3);
  await gamesService.deleteGames(games1.id);
  await gamesService.deleteGames(games2.id);
  await gamesService.deleteGames(games3.id);
})