//# Primitive

// 7types:String, Number, Boolean, null, undefined, Symbol, BigInt. It is dynamic type
//const score = 100 not define datatye in JS or 100.3 is alsp comes in number
//const score:number = 100 for typescript
const id = Symbol('123')
const anotherId = Symbol('123')
//console.table([id, anotherId]) o/p Symbol(123) Symbol(123)
//console.log(id === anotherId); o/p false

const bigNumber = 835407427628536357n
//console.log(bigNumber);



// Reference Type or Non Primitive - Array, Ojects, Function

const heros = ["shanktiman", "naagraj", "doga"]

let myObj = {
    name : "aradhya",
    age : 22,

}

let myFunc = function(){
    console.log("Hello my name is aradhya");
    
}

//console.log(typeof bigNumber); BigInt
//console.log(typeof heros);
//console.log(typeof myObj);
//console.log(typeof myFunc);
// typeof of all non primitive datatype are objects




