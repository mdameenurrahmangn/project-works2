// //Para meters

console.log("Hi hello")

function res(a,b){
    console.log(a+b)
}
// Arguments
res(20,50)


/* Schedulers

The Schedulers are used to schedule the execution of call back function

Types:
1.setInterval

2.setTimeout

*/


let go = 10

// const race = setInterval(function(){
//     console.log(go)
//     go = go + 1
// },1000)

const rolls = setTimeout(function(){
    console.log("From setTimeout:",go)
    go = go + 2
    console.log("After setTimeout:",go)
},1000)

clearTimeout(rol)