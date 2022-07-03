const userTrainReadingController = require("../DL/controllers/userTrainReadingController");
const userController = require("../DL/controllers/userController");

async function getAllUserTrainReading(){
    const AllUserTR=await userTrainReadingController.read({isActive:true});
   // if(AllUserTR.length==18){console.log("No training"); return false;}
    return AllUserTR;
}

async function createTrainReading(data){
    const createTR=await userTrainReadingController.create(data);
    console.log("createTR " ); 
   const userToUpdate=await userController.readOne(  {_id:"62bd8c65065dad71c384a25c"});
   const elmtToPush={_id: createTR._id};
   userToUpdate.TR.push(elmtToPush);
   console.log('userToUpdate',userToUpdate);
   userToUpdate.save();
}

module.exports={getAllUserTrainReading,createTrainReading}

