const router = require('koa-router')();

const controller = require('../controllers');

module.exports = (app) => {
  router.get('/', controller.home);

  router.get('/rank', controller.rank);

  router.get('/players', controller.players);

  router.get('/playerStats', controller.playerStats);

  app.use(router.routes()).use(router.allowedMethods());
};
