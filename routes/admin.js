const router = require('express').Router();
const adminController =require('../controller/adminController')

router.get('/dashboard', adminController.viewDasboard);

module.exports = router