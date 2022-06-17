let express = require('express');
let router = express.Router();

let indexController=require('../controllers/index');
/* GET home page. */
router.get('/', indexController.displayhomepage);
/* GET home page. */
router.get('/home', indexController.displayhomepage);
/* GET about page. */
router.get('/about', indexController.displayaboutpage);
/* GET projects page. */
router.get('/projects', indexController.displayprojectspage);
/* GET services page. */
router.get('/services', indexController.displayservicespage);

/* GET contact page. */
router.get('/contact', indexController.displaycontactpage);

router.get('/contacts',indexController.displaycontactspage);



module.exports = router;
