/*
File Name - contacts.js
Student Name - Bhhodip patel
Student ID - 301251644
Date - 17-6-2022
*/
let mongoose = require('mongoose');

// create a model class
let contactsModel = mongoose.Schema({
    name: String,
    number: String,
    email: String,
   
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contacts', contactsModel);