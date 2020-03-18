const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
const slug=require('slugs');
let Schema=mongoose.Schema;

let userSchema=new Schema({
    name:{
        type:String,
        trim:true},
        slug:String,
    age:{
         type:Number,
        },
    city:{
        type:String,
        },
    state:{
         type:String,
         },
    email:{
            type:String,
          }        
});
userSchema.pre('save',function(next){
    if(!this.isModified('email')){
        next();
        return;
    }
    this.slug=slug(this.email);
    next();
});

module.exports=mongoose.model('User',userSchema);