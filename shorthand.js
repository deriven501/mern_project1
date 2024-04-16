//Shorthand - is avoids writing redundant variable name, when key of our object and the the value stored in object are same

let cat = "Miaow", // if we put comma we don't need to use let again and it will continue as let till semicolon ;
dog = "Woof",
bird = "Chirp",
lion = "roar";

//without short hand
let AnimalSound = {
    cat : cat,
    dog : dog,
    bird : bird,
    lion : lion
}

//we can just keep one if key and value both refer to the same name and variable
let AnimalSoundES6 = {cat, dog, bird, lion }

// let AnimalSoundES6 = {
//     cat,
//     dog,
//     bird,
//     lion
// }

//console.log(AnimalSound)
console.log(AnimalSoundES6)

console.log(`Animal Sound refers with 1 ${AnimalSoundES6}`) 
console.log(`Animal Sound refers with 2 ${JSON.stringify(AnimalSoundES6)}`) //converts the object in to value of strings