const userTrainReadingController = require("../DL/controllers/userTrainReadingController");
const userController = require("../DL/controllers/userController");
// const userController = require("DL/controllers/userController.js");



async function getAllUserTrainReading(){
    const AllUserTR=await userTrainReadingController.read({isActive:true});
   // if(AllUserTR.length==18){console.log("No training"); return false;}
 //   console.log(AllUserTR);
    return AllUserTR;
}


// const elementToPush = { a: 1, b: 2 };
// const body = { $push: { arrayField: elementToPush } };
// model.patch(id, body);




async function createTrainReading(data){
  //  console.log("bla");
   // console.log(data);
    const createTR=await userTrainReadingController.create(data);
    console.log("createTR " );
    // const elmtToPush={_id: createTR._id};
    // const body={$push: {TR:elmtToPush}};
    // model.patch(id, body);
   const userToUpdate=await userController.readOne(  {_id:"62bd8c65065dad71c384a25c"});
 //  console.log(userToUpdate);
   const elmtToPush={_id: createTR._id};
   userToUpdate.TR.push(elmtToPush);
   console.log('userToUpdate',userToUpdate);
   userToUpdate.save();
}

//     const usertoUpdate=await userController.findOneAndUpdate( 
//         {_id:"62bd8c65065dad71c384a25c"},
        
//                         {$push: {"TR": {_id: createTR._id}}}, //" mongoose.SchemaTypes.ObjectId"
                        
//                         // {safe: true, upsert: true, new: true},
//                         // function(err, model){
//                         //     if (err){
//                         //       console.log("ERROR: ", err);
//                         //       res.send(500, err);
//                         //     }else{
//                         //       res.status(200).send(model);
//                         //     }
//                         //    }
//                           );
                          
//               console.log("end create train reading function") ;         
//                         }

//                         person.friends.push(friend);
// person.save(done);

                      

                        
                        
                     

    // Game.findOneAndUpdate(
    //     {"_id":req.body.code},
    //     {$push: {"players": {username: "hardcode", currentRound: 1}}},
    //     {safe: true, upsert: true, new: true},
    //     function(err, model){
    //        if (err){
    //          console.log("ERROR: ", err);
    //          res.send(500, err);
    //        }else{
    //          res.status(200).send(model);
    //        }
    //       }
    //     );

    //     var GameSchema = new mongoose.Schema({
    //         _id: mongoose.Schema.Types.Mixed,
    //         players: [{
    //           username: String,
    //           currentRound: Number
    //         }],
    //         // the number represents the qNumber in the questionData.js
    //         // and also the round number for what the player is currently on
    //         questions: [Number]
    //         });

        



    // const temp=await userTrainReadingController.find({_id: createTR._id}).populate('userTrainReading');
    // console.log(temp);


    // const x= await userController.find().populate('userTrainReading').read({TR[0]._id:temp._id})
  
    // await userController.find().populate('userTrainReading').read({TR[0]._id:temp._id})


    // const users = await userLogic.();

    
//     ref  userTrainReading populate 
// const updatUser=await userController.update({},{TR: add data})
//     return createTR;




// async function read(filter, proj) {
//     return await orderModel.find(filter, proj)
//     .populate('userId')
//     .populate('items.itemId');
// }

module.exports={getAllUserTrainReading,createTrainReading}

