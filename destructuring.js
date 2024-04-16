let Student = {
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//let { Name = "Joe S", Session, Standard, Subject} = Student

let { Name = "Joe S", Session, Standard, Subject : {Physics, Mathematics = 100, Language}} = Student

console.log(Name)
console.log(Session)
console.log(Standard)
console.log(Subject.Physics)
console.log(Mathematics)
console.log(Physics)
console.log(Language)