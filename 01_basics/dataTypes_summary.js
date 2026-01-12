//Primitive DataTypes :- 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt



//Reference(non primitive):- Arrays, Objects, Functions
// const heros = ["shaktiman", "naagraj", "doga"]
// let myObj = {
//     name:"Basanagoud",
//     age: 22
// }

// const myFunction = function(){
//     console.log("hello world");
// }

// console.log(typeof bigNumber);


//********************************************************************* */

// Stack Memory(Primitive Tyoe), Heap Memory(Non-Primitive)

let myYtname = "xyz";

let anotherName = myYtname;
anotherName = "abc";
console.log(myYtname); //xyz
console.log(anotherName);//abc

let userOne = {
    email: "user.gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "google@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);



 