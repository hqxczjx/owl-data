// const OverwatchLeague = require('overwatchleague');

// const OWL = new OverwatchLeague({
//   useChina: true,
// });
const service = require('../services');

module.exports = {
  home: async(ctx, next) => {
    await ctx.render('home');
  },
  rank: async(ctx, next) => {
    const res = await service.getRankings();
    await ctx.render('rank', {data: res.data});
  },
  players: async(ctx, next) => {
    const team = ctx.request.query.team;
    const res = await service.getPlayers(team);
    console.log(res.data)
    await ctx.render('players', {data: res.data});
    // OWL.getPlayerStats(8711).then((res) => {
    //   console.log(res.data);
    //   ctx.response.body = 'sda';
    // });
  },
  playerStats: async(ctx, next) => {
    const playerid = ctx.request.query.playerid;
    const res = await service.getPlayerStats(playerid);
    await ctx.render('playerStats', {data: res.data});
  },
};
