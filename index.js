let promiseobj = new Promise();

let promiseobj1 = new Promise(function () {});


// //promise settlement
// promiseobj.then(fullfillment,Rejection);

// function fullfillment(output){
//     console.log("   ",output);
// }

// function Rejection(output){
//     console.log("   ",output);
// }


function checkthepromise() {
    let promiseobj = new Promise(function (resolve, reject) {
      let x = 9;
      if (x > 9) {
        resolve("X is greater than 9");
      } else if (x <= 9) {
        reject("x is less than or equal to 9");
      }
    });
  }