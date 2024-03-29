//March - MERNStack Session - Assessment Number 1
///Q1. Create a file with name basics and show all the features that you know about javascript? Explain in 1-2 line statements 
//function expression - allow variable to carry name or no name function with definition
console.log("question 1 output:")
console.log("function expression output:")
var funcExp = function(a,b) {
    return a + b
} 
console.log(funcExp(5,10) + "\n")
//function hoisting - Despite being an interpreted language, function call before its definition still work in JS
console.log("function hoisting output:")
console.log(test())
function test() {
    return "this is a test \n"
}

//ternary operation  - simplify if-elseif-else statements into a single line statement
function ternaryTest (boolVar) {
    var answer
    boolVar ? answer = "this is true": answer = "this is false"
    return answer
}
console.log("ternary output:")
console.log(ternaryTest(true))
console.log(ternaryTest(false))
console.log("\n")
//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

console.log("Question 2 output: ")
var sus = "Robert"
console.log(sus + ", " + typeof sus)
sus = .0266
console.log(sus + ", " + typeof sus)
sus = false
console.log(sus + ", " + typeof sus)
sus = {
    myname: "Test me"
}
console.log(sus.myname + ", " + typeof sus)
sus = 25166665
console.log(sus + ", " + typeof sus)
sus = undefined
console.log(sus + ", " + typeof sus)
sus = true
console.log(sus + ", " + typeof sus)
sus = "Robert Jr."
console.log(sus + ", " + typeof sus)
sus = null
console.log(sus + ", " + typeof sus)
sus = {}
console.log(sus + ", " + typeof sus)
sus = -32767
console.log(sus + ", " + typeof sus)
console.log("\n")
//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function
function showUserNameInfo(firstname, lastname, age) {
    console.log("question 3 output: " + firstname + " " + lastname + ", age: " + age)
}

showUserNameInfo("David", "Nghiem", 26);
console.log("\n")
//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind
function doaddition (a, b, c) {
    return a + b + c
}
console.log("question 4 output:")
console.log("output of add(2,3,4): "+ doaddition(2,3,4))//Normal output of 9 since all three variables have their value 
console.log("output of add(2): "+ doaddition(2)) //only one parameter is specified so b and c becomes undefined by default so the result means that the 2 is adding undefine value which is a nonsensical result 
console.log("output of add(2.3,3): "+ doaddition(2.3, 3))//The situation of this parameter is the same as the above, a and b should be auto cast and add normal but it also add undefine which return a nonsensical result
console.log("output of add(\"first\", 2, \"three\"): "+ doaddition("first", 2 ,"three"))//Since a and c are string, JS decided to concatenate b with a and c. The resulting output is a string instead.
console.log("\n")
//Q5. Give me an example of your choice on closure, objects each.
console.log("Question 5 output:")
console.log("Object example") 
var aslume = {
    level1: "man",
    level2: "jonkler",
    level3: "Bone"
}
console.log("this object called Aslume had my back, it had: " + aslume.level1 + ", " + aslume.level2 + " and " + aslume.level3 + "\n")

console.log("closure example ")
function insanityMeter(username, value) {
    var user = username
    var m1 = "normal behavior"
    var m2 = "mild - meme postings in behavior and thoughts"

    return test = function(truth) {
        if(truth) {
            return {
                person: username,
                indication1: m1,
                indication2: m2
            }
        }
    }
}

var test = insanityMeter("Jackal", 1)
console.log(test(true))
