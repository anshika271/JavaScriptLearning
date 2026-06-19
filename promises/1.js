// function saveDb(data){
//    let internetSpeed=Math.floor(Math.random()*10)+1;
//    if(internetSpeed>4){
//       return "your data is saved :", data;
//    }
//    else{
//       return "weak connection, Data is not saved";
//    }


   
// function savetodb(data, success, failure){
//    let internetSpeed=Math.floor(Math.random()*6)+1;
//    if(internetSpeed>4){
//       success();
//    }
//    else{
//       failure();
//    }

// }
// savetodb(
//    "anshika Mishra",
//    ()=>{
//       console.log("success: your data is saved");
//    },
//    ()=>{
//       console.log("failure: weak connection, data is not saved");
//    }
// );

//here are created callback hell
//promises came for avoid callback hell
// prmises are object
// resolve & reject

// function savetodb(data) {
//    return new Promise((resolve, reject)=>{
//       let internetSpeed=Math.floor(Math.random()*6)+1;
//       if(internetSpeed>4){
//          resolve("success: data was saved" );
//       }
//       else{
//          reject("failure: weak connection");
//       }
//    });
// }

// there tow method in promises
// 1. then()
//2. catch()