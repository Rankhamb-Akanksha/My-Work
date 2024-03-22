async function displayUserInfo(){
    let url='https://randomuser.me/api/';

    let promiseobj1=fetch(url);

    //promiseobj1.then()
    //.then()
    //catch()
//settlement of promiseobj1
    let response = await promiseobj1;

   let promiseobjforjson=response.json();

   let data=await promiseobjforjson;
   
    console.log(" line no 13 ");
    console.log(" The responce is ",response);


}