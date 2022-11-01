
const express = require('express');
const router = express.Router();

const siteCotroller = require('../app/controllers/SiteCotroller');

//newController.index
router.use('/search', siteCotroller.search);

router.use('/', siteCotroller.index);

module.exports = router;