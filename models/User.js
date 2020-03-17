const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
const slug=require('slugs');


const userSchema=new Schema({
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
        }    
})

userSchema.pre('save',function(next){
    if(!this.isModified('name')){
        next();
        return;
    }
    this.slug=slug(this.name)
    next();
})

module.exports=mongoose.model('User',userSchema);