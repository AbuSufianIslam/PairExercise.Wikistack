const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const main = require('./views/main');
const layout = require('./views/layout');
const { db, Page, User } = require('./models/index');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));

app.use('/wiki', wikiRouter);

app.get('/', async (req, res, next) => {
  try {
    res.redirect('/wiki');
  } catch (next) {
    next(err);
  }
})

const init = async () => {
  // await db.sync({force: true});
  await db.sync();
  app.listen(port, () => {
    console.log(`listening on port ${port}...`);
  })
};

init();
