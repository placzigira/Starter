import mongoose from "mongoose";

const Schema= new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        require:true
    }
})
export default mongoose.model("user", Schema)