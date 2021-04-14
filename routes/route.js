const express = require("express");
const router = new express.Router();
const mongoose =require("mongoose");

const Student = require("../model/student");

router.get("/",async(req,res)=>{
	try{
		const studentsData = await Student.find();
		res.send(studentsData);
	}catch(e){
		res.send(e);
	}
})

router.get("/:id",(req,res)=>{
	
		 let id = req.params.id;

		  Student.findById(id, function (err, data) {
		    if (err) return res.json(err );
		    return res.json( data );
		  });
})



router.post("/create",async(req,res)=>{
	try{
	 const user =new Student(req.body);
	 const createUser = await user.save();
	res.status(201).send("post");
	}catch(e){
	res.status(400).send(e);

}
})

router.put("/update/:id",(req,res)=>{
		const _id =req.params.id;
 Student.findByIdAndUpdate(_id,
 	req.body,{
			new:true}
		).exec((error, update) => {
    if (error) {
      res.send(error);
    }
    return res.json(update);
  });
});
// router.put("/update/:id",async(req,res)=>{
// 	try{
// 		const _id =req.params.id;
// 		const studentData = await Student.findByIdAndUpdate(_id,req.body,{
// 			new:true}
// 		);


// 		if(!studentData){
// 			return res.status(404).send();
// 		}
// 		else{

// 		res.status(500).send("put");
// 		}
// 	}catch(e){
// 		res.send(e);
// 	}
// })


router.delete("/delete/:id", (req, res) => {
  Student.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
    if (error) {
      res.send(error);
    }
    return res.json(deletedItem);
  });
});

// router.delete("/delete/:id",async(req,res)=>{
// 	try{
// 		const _id =req.params.id;
// 		const studentData = await Student.findByIdAndRemove(_id);
// 		if(!req.params.id){
// 			return res.status(404).send();
// 		}
// 		else{
// 		res.status(500).send("delete");
// 		}
// 	}catch(e){
// 		res.send(e);
// 	}
// })

module.exports = router;