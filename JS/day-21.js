console.log("Hello 1")
console.log("Hello 2")
console.log("Hello 3")
console.log("Hello 4")

// fakedata = fetch("https://jsonplaceholder.typicode.com/todos/") // promise <pending>

//old way
.then((seeing) => {
    // console.log(seeing.json()) //Async
    return seeing.json()
})
.then((seen) => {
    console.log(seen);
})
.catch((error)=>{
    console.log(error)
})

//New Way
async function fetchdata()
{
    try
    {
        const data = fetch("https://jsonplaceholder.typicode.com/todos/");
        const dataans = (await data).json(); // promise <pending>

        console.log(dataans);
    }
    catch(issues)
    {
        console.log(issues);
    }
}

fetchdata();