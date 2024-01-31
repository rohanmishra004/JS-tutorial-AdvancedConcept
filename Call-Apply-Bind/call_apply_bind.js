//Call - Function Borrowing , one object borrows function of another object 
//sample code

let name = {
    firstName: 'User',
    lastName: 'Test1',
    fullName: function () {
        console.log(`${this.firstName}  ${this.lastName}`)
    }
}

//now suppose we have another object but it does not have the function

let name2 = {
    firstName: 'John',
    lastName: 'Doe'
}

//name2 can borrow fullName function from name object


//first parameter will always be a reference to the this variable, second parametet can be arguments
name.fullName.call(name2);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//APPLY - the only difference between call and apply method is the way we pass the arguments, first argument here will also be the same reference to the this variable but the next arguments are passed as list



let newName = {
    firstName: 'User',
    lastName: 'Test1',
    fullName: function (state, country) {
        console.log(`${this.firstName}-${this.lastName} :: ${state} :: ${country}`)
    }
}

let newName2 = {
    firstName: 'John',
    lastName: 'Doe'
}


newName.fullName.apply(newName2, ['Newyork','USA'])

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Bind - method is same as call but instead of calling , it will bind the fullName fuction to it 

