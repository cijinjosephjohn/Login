const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json)
app.listen(5000,()=>{
    console.log("Server Started");
});

app.post("/post",async(req,res)=>{
    console.log(req.body);
    const {data} = req.body;
    
});


const mongourl = "mongodb+srv://Cijin:cijin12@@cluster0.4yo1dfd.mongodb.net/?retryWrites=true&w=majority";
mongoose
.connect(mongourl,{
    useNewUrlParser:true
})
.then(()=>{console.log("connected to database");
})
.catch((e)=>console.log(e));


require("./userDetail");
const User =mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{
    const [name,email,mobileNo] = req.body;
    try{
        await User.create({
            uname:username,
            email:email,
            PhoneNo:phoneNumber,
        })
        res.send({status:"ok"})
    }
    catch(error){
        res.send({status:"fail"})
    }
})