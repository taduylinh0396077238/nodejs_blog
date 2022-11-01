
const express = require('express');
const router = express.Router();

//newsCotroller là 1 đối tượng ko cần viết hoa chữ cái đầu nào nó là controller function hoặc class thì mới viết hoa chữ cái đàu 
const newsCotroller = require('../app/controllers/NewsCotroller');

//newController.index
router.use('/:slug', newsCotroller.show);
router.use('/', newsCotroller.index);

module.exports = router;




