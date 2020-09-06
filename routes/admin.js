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
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiples, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);


//endpoint details item
router.get('/item/show-detail-item/:itemId', adminController.viewDetailItem);
router.post('/item/add/feature',uploadSingle, adminController.addFeature);


router.get('/booking', adminController.viewBooking);

module.exports = router