const mongoose =require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	address:{
		type:String,
		required:true
	}
})
///creating new collection 


const Student = new mongoose.model("Student",studentSchema);
module.exports =Student; 