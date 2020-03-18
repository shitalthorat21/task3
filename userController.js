const express = require('express');
const mongoose=require('mongoose');
const User=mongoose.model('User');
let userData=[];

exports.homePage=(req,res)=>{
    res.render('hello');
}

exports.user=(req,res)=>{
    res.render('users',{title:'User Table'});
}

exports.addUser=(req,res)=>{
    res.render('editUser',{title:'Add User'});
}

exports.createUser=async (req,res)=>{
    const user=new User(req.body);
    await user.save();    
}

exports.addData=async (req,res)=>{
    console.log(req.body);
    const user=await (new User(req.body)).save();
    userData.push(user);
    console.log(userData);    
}

exports.displayUser=(req,res)=>{
    console.log(userData);
    res.render('users',{arr:userData});
}









