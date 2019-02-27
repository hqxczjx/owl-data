const OverwatchLeague = require('overwatchleague');

const OWL = new OverwatchLeague({
  useChina: true,
});

module.exports = {
  getRankings: async() => {
    return OWL.getRankings();
  },
  getPlayers: async(team) => {
    return OWL.getPlayers(team);
  },
  getPlayerStats: async(playerid) => {
    return OWL.getPlayerStats(playerid);
  },
};
