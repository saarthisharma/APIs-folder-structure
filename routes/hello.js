const express = require('express');
const router = express.Router();
// requiring controller
hello = require('../controllers/hello');

router.get('/' ,hello.hello)
// now we will export this router
