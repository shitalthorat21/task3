const mongoose=require('mongoose');
const User=mongoose.model('User');
const userData=[];

exports.createUser=(req,res)=>{
    res.render('users');
}

// exports.addUser=(req,res)=>{
//     res.render('users');
// }

exports.addUser=async (req,res)=>{
    console.log(req.body);
    const user=(new User(req.body)).save();
    userData.push(user);
    console.log("It works");
}

// exports.getUser=async (req,res)=>{
//     const users= await User.find();
//     console.log(users);
//     res.render('users',{title:'Users',users});
// }
exports.displayUsers=(req,res)=>
{
    console.log(userData);
    res.render('users',{arr:userData});
}
exports.userData;



