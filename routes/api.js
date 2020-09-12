const router = require('express').Router();
const apiController =require('../controller/apiController');


//const {uploadSingle, uploadMultiple}= require('../middleware/multer');



//enpoint Signin

router.get('/landing-page', apiController.landingPage);
module.exports = router;
