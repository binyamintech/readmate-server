const express = require("express")
const router = express.Router();
const userTrainReadingLogic = require('../BL/userTrainReadingLogic')
// const userLogic = require('../BL/userLogic')

router.get('/', async(req,res)=>{
    try{
        console.log("get all TR")
    const users = await userTrainReadingLogic.getAllUserTrainReading();
    res.send(users)
    }catch(error){
        res.status(500).send("sorry something went wrong"+ error.message)
    }
})

router.post('/new', async(req,res)=>{
    try{
        console.log("post new TR");

      const newTR= await userTrainReadingLogic.createTrainReading(req.body);
    res.send(newTR)
    }catch(error){
        res.status(500).send("Sorry something went wrong"+ error.message)
    }
})

module.exports=router;

