const express = require('express');
const router = express.Router();
const { Page } = require('../models');
const { User } = require('../models');
const { addPage } = require('../views');


router.get('/', async (req, res, next) => {
  try {
    res.send('hello world!')
  } catch (error) { next(error) }
});

router.post('/', async (req, res, next) => {

  const page = new Page ({
    title: req.body.title,
    content: req.body.content,
    status: req.body.status,
    slug: req.body.title
  });
  const user = new User({
    name : req.body.name,
    email : req.body.email
  })

  try {
    await page.save();
    console.log(page);
    await user.save();
    console.log(user);
  } catch (error) { next(error) }
});

router.get('/add', async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) { next(error) }
});


module.exports = router;
