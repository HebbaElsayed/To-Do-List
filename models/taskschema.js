const mongoose=require("mongoose")
const Schema=mongoose.Schema

const taskschema = new Schema({
    task:{
        type:String,
        required:true,
    },
});




const task=mongoose.model("task",taskschema);

module.exports=task;
