const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const layout = require('./views/layout');
const { db, Page, User } = require('./models/index');


app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));

app.get('/', async (req, res, next) => {
  try {
    res.send(layout());
  } catch (next) {
    next(err);
  }
})

const init = async () => {
  await db.sync();
  app.listen(port, () => {
    console.log(`listening on port ${port}...`);
  })
};

// init();
