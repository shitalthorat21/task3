const mongoose=require('mongoose');
const User=mongoose.model('User');

// exports.users=(req,res)=>{
//     res.render('users');
// }

exports.addUser=(req,res)=>{
    res.render('users',{title:'Add User'});
}

exports.createUser=async (req,res)=>{
    const user=new User(req.body);
    await user.save();
    console.log("It works")
}

// exports.getUser=async (req,res)=>{
//     const users= await User.find();
//     console.log(users);
//     res.render('users',{title:'Users',users});
// }




