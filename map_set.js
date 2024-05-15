// let myMap = new Map();

// //let user = [{Name : "Dillon"},{Address : {Address1}},{}]
// let keyString = 'a string', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

// myMap.set(keyString, "String is key for this!!")
// myMap.set(keyObj, "Object is key for this!!")
// myMap.set(keyFunc, "Function is key for this!!")
// myMap.set(keyNum, "Number is key for this!!")

// console.log(myMap.entries())

// // console.log(myMap.get(keyString)) //String is key for this!!
//  console.log(myMap.get(keyFunc)) //Function is key for this!!
// console.log(myMap.get({}))
// //console.log(myMap.get(keyObj))

// myMap.delete(2000)
// myMap.delete(keyFunc)
// console.log(myMap.entries())

// myMap.clear()

// console.log(myMap.entries())


let StudentSet = new Set(["David N","Wanda", "Otoi", "Mayuri", "Joe", "Yiluo"])

console.log(StudentSet.entries())

console.log(StudentSet.add("Sierra"))
console.log(StudentSet.add("Suyash"))

//console.log(StudentSet.add("Suyash"))

console.log(StudentSet.add("Wanda"))

// console.log(StudentSet.entries())

console.log(StudentSet.has("David N"))
console.log(StudentSet.has("David"))
console.log(StudentSet.has("Eric"))