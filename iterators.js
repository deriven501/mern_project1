let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "Batman"}
];

//1. Print the persons saved by captain america

// let savedByCA = personsList.filter(person => person.savedby=="SpiderMan" ? person : "")

// console.log(savedByCA)

let savedByIronMan = personsList.map(person => {
    if(person.savedby=="IronMan") 
            return {"New Birth " : "Super Hero " + person.name}
        }).filter(names=> names != undefined)

console.log(savedByIronMan)

// let savedByBatMan = personsList.some(person => person.savedby=="Batman") 
// console.log(savedByBatMan)
// let personsSavedUniquely = personsList.reduce((prevVal, currVal, index)=>{
//     console.log(prevVal)
//     console.log(currVal)
//     console.log(index)
//     console.log("\n")
//     //console.log(array)
//     prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1
//     return prevVal 
// }, []) //new Set()

// console.log(personsSavedUniquely)