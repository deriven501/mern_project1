var funcAsClass = function(name, age, address){
    //this : is the scope of function in which it executes (this - keyword)
    this.name = name;
    this.age = age;
    this.address = address;

    this.getUserDetails = function (isAdmin) {
        return {
            name : this.name,
            age : this.age,
            session : this.session
        }
    }
}

funcAsClass.prototype.session = "Javsacript Basics!!!";

var funcObj = new funcAsClass("Bryan", 20, "US")
console.log(funcObj.getUserDetails(true))