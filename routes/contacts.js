let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let contacts = require('../models/contacts');


router.get('/', (req, res, next) => {
    contacts.find((err, contactslist) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
           

            res.render('contacts', {title: 'Contacts List', contactslist: contactslist})           
        }
    });
});

module.exports = router;