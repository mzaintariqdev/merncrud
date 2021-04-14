const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require('body-parser'); // <=== this line
const cors = require('cors')
const route = require('./routes/route')
mongoose.connect('mongodb+srv://username:password@cluster0.rbr7y.mongodb.net/databasename?retryWrites=true&w=majority',{
	useCreateIndex:true
	,useNewUrlParser:true,
	useUnifiedTopology:true,
	useFindAndModify:false}).then(()=>{
		console.log("connection is successfull!!");
	}).catch((e)=>{
		console.log("no connection ");
	});

const app = express();
app.use(bodyParser.json()); 
app.use(cors());

////manually host port no (3000 for localuse only)
const port = process.env.PORT || 3001;
 app.use(express.json());


app.use('/students',route);
app.listen(port, ()=>{
	console.log(`connection is setup at ${port}`);
})
