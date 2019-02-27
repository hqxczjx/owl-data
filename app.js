const path = require('path');
const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
// const OverwatchLeague = require('overwatchleague');

// const OWL = new OverwatchLeague({
//   useChina: true,
// });

// OWL.getPlayerStats(8711).then(response => {
//   console.log(response.data);
// });

const app = new koa();

const router = require('./router');

// const index = router.get('/', ctx => {
//   ctx.response.body = 'hello world';
// }).routes();

// app.use(index);
app.use(bodyParser());
// app.use(apiRouter.routes());

app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),// 指定视图目录
  nunjucksConfig: {
    trimBlocks: true // 开启转义 防Xss
  }
}));

router(app);

app.listen(3000, () => {
  console.log('listening');
});
