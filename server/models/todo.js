const mongoose= require('mongoose');

const Schema = mongoose.Schema;
const toDoSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    status:Number,
});
const ToDo = mongoose.model('ToDo',toDoSchema)

module.exports={ToDo}