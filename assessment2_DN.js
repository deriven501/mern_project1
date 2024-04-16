//David Nghiem
//Assessment 2
// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

//a. 
let notEvil = heroes.filter(hero => !(hero.isEvil))
console.log("1a.")
console.log(notEvil)
console.log("\n")
//b.
console.log("1b.")
let familyCountUniquely = heroes.reduce((prevVal, currVal)=>{
    prevVal[currVal.family] = prevVal[currVal.family] ? prevVal[currVal.family] + 1 : 1
    return prevVal 
}, []) 
console.log(familyCountUniquely)
console.log("\n")
//c.
console.log("1c.")
let sirHeroes = heroes.map(hero => {
    if(hero.name=="Harley Quinn") { //account for Harley Quinn who is a cool gal
        return {"Madam":  hero.name}
    } else {
        return {"Sir": hero.name}
    }
            
        }).filter(names=> names != undefined)

console.log(sirHeroes)
console.log("\n")
//d.
console.log("1d.")
let marvelEvil = heroes.some(hero => !(hero.isEvil)) 
console.log(marvelEvil)
console.log("\n")

//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example
console.log("2.")
console.log("multiply numbers")
function multiplication(...numbers) {
    let result = 0;

    result = numbers.reduce((prevVal, currVal)=> prevVal * currVal, 1)

    return result
}

let numList = [1,2,3,4,5,6,7]
console.log(multiplication(...numList))
console.log("\n")

console.log("Students of session")
let students = ["Anna", "Mayuri", "Joe Si", "Romant"]
console.log(...students)
console.log("\n")

//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
console.log("3.")
let {userDetails: {last}, contact = "9119119110"} = person
console.log(last)
console.log(contact)
console.log("\n")


//4. Give me an example of const data manipulation
console.log("4.")
const patient = {
    place : "Aslume"
}

patient.place = "Manor" 
console.log(patient)
console.log("\n")

//5. What is the difference between for-of and for-in show with examples
console.log("5.")
console.log("for-of loop - iterates through a list of key:value pairs, often associated with objects")
let optimusPrime = {Name: "Optimus Prime", faction: "Autobots", rank: "leader", strength: "9", altmode: "truck with trailer"}
for (const key in optimusPrime) {
    //if (Object.hasOwnProperty.call(person, key)) { //this is a check to confirm that key is present else set  the context to current key
        const element = optimusPrime[key];
        console.log(`${key}: ${element}`)
    //}
}
console.log("\n")
console.log("for-of loop - easy iterates through a list of string or array elements without define a fixed length")
let autobots = ["Omega Supreme", "Sky Lynx", "Hot Rod", "Arcee", "Springer"]
for(const bot of autobots) {
    console.log(bot)
}
console.log("\n")

//6. Give me an example of bind and write its usage, comparison with arrow function
console.log("6.")
console.log("This problem output will get printed after the last question output")
var Villain = {
    Name : "Megatron",
    Rank : "Leader",
    Faction: "Decepticon",

    GetVillainInfo : function () {
        setTimeout((function () {
            console.log("\n")
            console.log(`Villain Info using bind: Name: ${this.Name}, Rank: ${this.Rank} and Faction: ${this.Faction}`);
        }).bind(Villain), 200) //bind helps keep the context back to Villain attributes after 2 seconds


        //Arrow function set context one level above its scope, this means the context is the object itself
        setTimeout((() => {
            console.log(`Villain Info with arrow function: Name: ${this.Name}, Rank: ${this.Rank} and Faction: ${this.Faction}`);
        }), 200) 
       }
}
//
Villain.GetVillainInfo()
console.log("\n")

//7. Create an example showing usage of event loop in concurrent execution cycle
console.log("7.")
function baz(z) {
    console.log("In baz: " + z) //Output message
}

function foo(y) {
    baz(y) //This function will get put on a queue second
    console.log("In foo: " + (y*y)) //After baz output, this function produce its message and released its stack
}

function bar(x) { 
    foo(x) //This function will get put on a queue first
    console.log("In bar: " + (x*x)) //After foo output, this function produce its message and released its stack
}
bar(5)
console.log("\n")

//8. create an example showing usage of short hand and default param.
console.log("8.")
//Shorthand
let pikachu = "pikapika", 
snorlax = "snooorrrlllaaax",
wobbuffet = "wobbuffet";

//default
let pokemonSound = {
    pikachu : pikachu,
    snorlax : snorlax,
    wobbuffet : wobbuffet
}
console.log(pokemonSound)
console.log("\n")

//9. Create two objects with some properties and merge them using Object method and ES6 way
console.log("9.")

let nobody = {
    name: "Orion Pax",
    occupation: "dock worker"
    
}

let autobotsLeader = {
    identity: "Optimus Prime",
    faction: "Autobots"
}

//Object method - assign function
let combineObject = Object.assign(nobody, autobotsLeader)
console.log("output from combine object using assign function")
console.log(combineObject)
console.log("\n")
//ES6 - spread operator 
let combineES6 = {...nobody, ...autobotsLeader}
console.log("output from combine object using ES6 Spread operator")
console.log(combineES6)
console.log("\n")

//10. Give me an example of call and apply each with it's usage
console.log("10.")
var autobotSquad = { sergeant:"Kup", trooper : "Scoop", support : "Bumblebee" }
var decepticonsquad = ["Soundwave", "Starscream", "Astrotrain"]

function commandOrder(comment) {
    //console.log("this", this)
    console.log(comment)

    console.log(this.sergeant, this.trooper, this.support)
}


console.log("call output - accept object and display its attributes value inside the body")
commandOrder.call(autobotSquad, "Transform and Rollout!!") 
console.log("\n")
function battleField(decepLeader, decep1, decp2) {
    console.log(`The squads of Autobots heroes: ${this.sergeant}, ${this.trooper} and ${this.support}`)
    console.log("versus")
    console.log(`The villanous Decepticons: ${decepLeader}, ${decep1}, ${decp2}`)
}
console.log("apply output - accept object without parameter and entire array in its parameter")
battleField.apply(autobotSquad, decepticonsquad)