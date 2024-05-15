
let promiseObject =new Promise((resolve, reject) => {

    //let userSession = Authentication_API(userInfo) //make call to server get the response and store

    setTimeout(()=>{
        resolve({
            status : "Success",
            value : "User Session Object",
            code : 200
        })}, 
    1000)

    setTimeout(()=>{
        reject({
            status : "Failed",
            value : "User Session Failed",
            code : 403.15
        })}, 
    1000)
})

console.log(promiseObject)

//response is returned upon being asked ==> promiseObj.then.then.catch
// .then => retruns for resolve cases
// .catch => retruns for rejected cases

promiseObject.then((response, error)=>{
    console.log("execution is successful  ", response) //resolved
}).catch((response, error)=>{
    console.log("execution is failed  ", response) //rejected
})

console.log(promiseObject)

console.log(promiseObject)

console.log("Promise Completed!!!");
