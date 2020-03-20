// const express = require('express');
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
exports.getUser=(req,res)=>{
    var user=new User();
    user.name=req.body.name;
    user.age=req.body.age;
    user.city=req.body.city;
    user.state=req.body.state;
    user.email=req.body.email;
    user.save((err,doc)=>
    {
        if(!err){
            res.redirect("users")
        }
        else{
            res.send("error occured");
        }
    });
   
}


// exports.createUser=async (req,res)=>{
//     // res.json(req.body);
//     const user=new User(req.body);
//      await user.save();  
//      res.send("item saved to database"); 
// }

exports.createUser=(req,res)=>{
    User.find((err,docs)=>{
        if(!err)
        {
            
            res.render('users',{data:userData})
        }
    })
}

// exports.addData=(req,res)=>{
//     console.log(req.body);
//     const user= (new User(req.body)).save();
//     userData.push(user);
//     console.log(userData); 
//     res.render('users',{arr:userData});   
// }

// exports.displayUser=(req,res)=>{
//     console.log(userData);
//     res.render('users',{arr:userData});
// }









