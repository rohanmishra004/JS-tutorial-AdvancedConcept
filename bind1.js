/**
 * Bind Function - With Bind method an object can borrow a method from another object
 * Bind returns a function
 */


//Sample code 

const person = {
    "name": "User",
    "company": "gmail",
    email:function(){
        return `${this.name}@${this.company}.com`
    }   
}

const member = {
    "name":"new user"
}


const newMemberEmail = person.email.bind(member)
console.log(newMemberEmail())
console.log(person.email())

//Now write your own implementation of the same bind method

/**
 * Considerations ::
 * Bind is available globally , so in order to make a function globally accessible we can attach it to Function.prototype 
 */

Function.prototype.mybind2 = function (obj,...args) {
    let func = this;
    return function (...innerArgs) {
        return func.apply(obj,args.concat(innerArgs))
    }
}




const newMemberEmail2 = person.email.mybind2(member)
console.log(newMemberEmail2())