let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let contacts = require('../models/contacts');
let contactsController=require('../controllers/contacts');

router.get('/',contactsController.displaycontactslist);

router.get('/add',contactsController.displayAddpage);

router.post('/add',contactsController.processAddpage);

router.get('/edit/:id',contactsController.displayEditpage);

router.post('/edit/:id',contactsController.processEditpage);

router.get('/delete/:id',contactsController.performdelete);

module.exports = router;