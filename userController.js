const express = require('express');
const mongoose=require('mongoose');
const User=mongoose.model('User');
let userData=[];

exports.homePage=(req,res)=>{
    res.render('hello');
}
exports.users=(req,res)=>{
    res.render('users');
}
exports.addUser=(req,res)=>{
    res.render('editUser',{title:'Add User'});
}

exports.createUser=async (req,res)=>{
    const user=new User(req.body);
    await user.save();
    
}
// exports.addUser=async (req,res)=>{
//     console.log(req.body);
//     const user=(new User(req.body)).save();
//     userData.push(user);
//     console.log("It works");
// }

// exports.getUser=async (req,res)=>{
//     const users= await User.find();
//     console.log(users);
//     res.render('users',{title:'Users',users});
// }
// exports.displayUsers=(req,res)=>
// {
//     console.log(userData);  
//     res.render('users',{arr:userData});
// }







