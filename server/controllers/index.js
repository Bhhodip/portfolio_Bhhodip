let express = require('express');
let router = express.Router();

module.exports.displayhomepage =(req,res, next)=>{
    res.render('index',{title:'Home'});
}
module.exports.displayaboutpage =(req,res,next)=>{
    res.render('index',{title:'About'});
}
module.exports.displayprojectspage =(req,res,next)=>{
    res.render('index',{title:'Projects'});
}
module.exports.displayservicespage =(req,res,next)=>{
    res.render('index',{title:'Services'});
}
module.exports.displaycontactpage =(req,res,next)=>{
    res.render('index',{title:'Contact'});
}
module.exports.displaycontactspage =(req,res,next)=>{
    res.render('index',{title:'bContact'});
}
