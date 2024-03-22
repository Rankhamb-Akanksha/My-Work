let url='https://randomuser.me/api/';

function fetchrandomuser() {
    let promiseobjone=fetch (url);
    console.log("  ",promiseobjone);

    promiseobjone.then(data);

    promiseobjone.catch(datanotready);
    
}

function data(apioutput){
console.log(" ----",apioutput);
}

function datanotready(apioutput) {
    console.log(" ----",apioutput);
}