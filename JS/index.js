// Variables in js

//Local variable
console.log("Local variable:")
let word = "Hello World";
console.log(word)

const num = 80
//num = 70
console.log(num)

//global Variable
console.log("Global variable:")
{
    var archie = "Riverdale"
    console.log(archie)
}
"pre-increment"

/*
Multiline Comments
let betty = "Sad"
*/

// Operators

let x = 10
let y = 2

console.log("operators:")
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)


//pre-increment
console.log("pre-increment", ++x)

//post-increment
console.log("post-increment", x + 2)

//typeof datatype
console.log("typeof datatype")

console.log(typeof (x))

//function in js

console.log("Function in js")

function demo(x, y) {
    return x + y
}
let val = demo(7, 7)
console.log(val)

//javascript if..else

console.log("javascript if..else")

const sample = 40
if(sample>20)
{
    console.log("Condition is true")  
}
else
{
    console.log("Condition is false")
}

//Array in js
console.log("Array in js")
console.log("To create a array in js")

const gold = [10,20,30,40,50]
console.log(gold)

console.log("To access an element in array")
console.log(gold[4])

console.log("To modify an element in array")
gold[4] = 70
console.log(gold)

console.log("To add an element in array")
console.log(gold.push("digits","valuses"))
console.log(gold)

console.log("To delete an element in array")
console.log(gold.pop())
console.log(gold)