const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();
var cors = require('koa2-cors');
const htmlRender = require("koa-html-render") 

app.use(cors());
app.use(htmlRender())

const redirect = ctx => {
  ctx.response.redirect('/');
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

const myData = ctx => {
  ctx.response.body = "{name: 'likai'}";
};

const jsonp = ctx => {
  const json = require('./config.js')
  const temp = json+''
  ctx.response.body = temp;
};
const tool = ctx => {
  ctx.html("./index.html")
};

app.use(route.get('/', main));
app.use(route.get('/data', myData));
app.use(route.get('/jsonp', jsonp));
app.use(route.get('/tool', tool));

app.use(route.get('/redirect', redirect));

app.use(main);
app.listen(3000);
