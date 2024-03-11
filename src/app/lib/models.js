import  mongoose  from 'mongoose';



const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false,
        required:false,
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
},
{ timestamps: true });




export const User = mongoose.models.User || mongoose.model("User",userSchema)

