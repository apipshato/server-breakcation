const router = require('express').Router();
const adminController =require('../controller/adminController');
const { viewBank, addCategory } = require('../controller/adminController');
const { route } = require('.');
const {uploadSingle, uploadMultiples}= require('../middleware/multer');

router.get('/dashboard', adminController.viewDasboard);
//endpoint category
router.get('/category', adminController.viewCategory);
router.post('/category',adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id',adminController.deleteCategory);

//endpoint bank
router.get('/bank', adminController.viewBank);
router.post('/bank',uploadSingle, adminController.addBank);
router.put('/bank',uploadSingle, adminController.editBank);
router.delete('/bank/:id', adminController.deleteBank);

//endpoint item
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiples,  adminController.addItem);

router.get('/booking', adminController.viewBooking);

module.exports = router