//David Nghiem
//Assessment 3
//Assessment NodeAPI and ES6 - 01-May-2024

//6. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
//7. Create a promise object that get resolved after two seconds and rejected after three. Also it returns five ES6 features on resolved

//8. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//9. Use the question #7 to build promises using async and await - with multithread
//10. Create an example of generator function of your choice

console.log("6.")
console.log("Map")
let myMap = new Map();
let job1 = "frycook", job2 = "boss", job3 = "Cashier", job4 = "Teacher"
myMap.set(job1, "Spongebob")
myMap.set(job2, "Mr. Krab")
myMap.set(job3, "Squidward")
myMap.set(job4, "Mrs. Puff")
console.log(myMap.entries())
console.log(job1 + " - "+ myMap.get(job1))
myMap.set(job1, "Patrick Star")
console.log("Replacing Spongebob to Patrick: " + job1 +  " - "  + myMap.get(job1))
console.log(myMap.entries())
myMap.delete(job4)
console.log("removing last entry:")
console.log(myMap.entries())
console.log("\n")

console.log("Set")
let Autobots = new Set(["Optimus Prime","Ultra Magnus", "Bumblebee", "Elita-1"])
console.log(Autobots)
Autobots.add("Springer")
Autobots.add("Arcee")
console.log(Autobots)
Autobots.add("Elita-1")
console.log("Trying to add Elita-1 again but it will not be added to set since it is not unique")
console.log(Autobots)
Autobots.delete("Ultra Magnus")
Autobots.delete("Arcee")
console.log("Remove Ultra Magnus and Arcee from this set:")
console.log(Autobots)
console.log("Does the Autobots set have Ginrai: " + Autobots.has("Ginrai"))
Autobots.clear()
console.log("Remove all entries in Autobots set:")
console.log(Autobots)
console.log("\n")

console.log("7.")
let promise1 =new Promise((resolve, reject) => {

    setTimeout(()=>{
        resolve({
            status : "Success",
            value : "Promise, Generator, Buffer, Spread-Rest Operator, Template Literals",
            code : 200
        })}, 
    2000)

    setTimeout(()=>{
        reject({
            status : "Failed",
            value : "Failed",
            code : 403.15
        })}, 
    3000)
})

console.log(promise1)
console.log("Output will be after problem 10")

promise1.then((response, error)=>{
    console.log("Output of problem 8")
    console.log("Promise successful  ", response) 
    console.log("\n")
}).catch((response, error)=>{
    console.log("execution is failed  ", response) //rejected
})
console.log("\n")

console.log("8.")
console.log("multiply numbers")
console.log("spread operator is only used for object which does not work with rest operator")
function multiplication(...numbers) {
    let result = 0;

    result = numbers.reduce((prevVal, currVal)=> prevVal * currVal, 1)

    return result
}

let numList = [1,2,3,4,5,6,7]
console.log(multiplication(...numList))
console.log("\n")

console.log("9.")
let promise2 =new Promise((resolve, reject) => {

    setTimeout(()=>{
        resolve({
            status : "Success",
            value : "Spongebob, Squidward, Sandy, Squilliam",
            code : 200
        })}, 
    8000)

    setTimeout(()=>{
        reject({
            status : "Failed",
            value : "Failed",
            code : 100
        })}, 
    7000)
})

async function asyncCall() {

    console.log("Before await of promise 1")
    console.log("Output will be after problem 10")
    await promise1
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await of promise 1")

    console.log("Before await of promise 2")

    await promise2
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await of promise 2")
}

asyncCall()
console.log("\n")

console.log("10.")
function* society() {
    yield "We"
    yield "Live"
    yield "In"
    yield "A"
    yield "Society"
}

let jonkler = society();
console.log(jonkler.next().value)
console.log(jonkler.next().value)
console.log(jonkler.next().value)
console.log(jonkler.next().value)
console.log(jonkler.next().value)
console.log("\n")