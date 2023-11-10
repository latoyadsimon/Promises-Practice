// 11/09/23
// Promises

//used to fetch JSON from an api
//api to use: pokeapi.co
//To fetch data from an API you cannot run your project from your hard-drive. Most code editors have a plugin or extension you can install to run your project on a local server from your computer. You can also use www.jsbin.com/ to follow along with this lesson and make fetch() requests.
//---note javascript is asynchronous, meaning it runs code from top to bottom 
console.log("start");
//this fetch is putting the data in queue for us
const pokemon = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

console.log("finish");
console.log(pokemon);

// we can listen for when the data comes in, think of it like a click event
//.then(), takes an arrow function
pokemon.then((data) => console.log(data));

// when fetching data, types we get it back in, JSON
// pokemon
// .then((data) => data.json())
// .then((data)=> console.log(data));

// we need to listen for errors
pokemon
.then((data) => data.json())
.then((data)=> console.log(data))
.catch((err) => console.log(err));

// Creating Your Own Promises
// promise constructor
// promise takes a function, function takes resolve and reject
const promise = new Promise((resolve, reject) => {
    resolve("Heck Yes!");
});


promise
.then((data) => console.log(data));

const promise2 = new Promise((resolve, reject) => {
    reject("Dang It!");
});

promise2
.then((data) => console.log(data))
.catch((err) => console.log(err));

const promise3 = new Promise((resolve, reject) => {
    reject({});
});

promise3
.then((data) => console.log(data))
.catch((err) => console.log(err, "No data"));

// with .then, it will not run the function until the resolve or reject is called.

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({});
    }, 3000);
});

promise4
.then((data) => console.log(data))
.catch((err) => console.log(err, "No data"));

// Working with multiple promises

const youTubePost = { id: 1, comment: "You Rock!"};

const hobbies = ["Skateboarding", "Coding"];

// shorthand, using res for resolve and err for reject
const post = new Promise((res, err) => {
    setTimeout(() => {
        res(youTubePost);
    }, 4000);
});

const hobby = new Promise((res, err) => {
    setTimeout(() => {
        res(hobbies);
    }, 1000);
});

// .all method takes an array, we can listen for when all data is returned
Promise
.all([post, hobby])
.then((data) => console.log(data));

// now we can use destructuring 

Promise
.all([post, hobby])
.then((data) => {
    const [ytPost, myHobbies] = data;
    console.log(ytPost, myHobbies);
}); 



//next example using pokeapi.co and api.chucknorris.io
//be aware of the type of data the fetch is returning, the most common is json but sometimes it does not return as that
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


const pokemon2 = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
const chucknorris = fetch("https://api.chucknorris.io/jokes/random");

// Promise
// .all([pokemon2, chucknorris])
// .then((data) => console.log(data));

// Promise
// .all([pokemon2, chucknorris])
// .then((response) => {
//     return Promise.all(response.map((res) => console.log(res)))
// });

Promise
.all([pokemon2, chucknorris])
.then((response) => {
    return Promise.all(response.map((res) => res.json()))
})
// .then((data) => console.log(data));
.then((data) => {
    const [poke, joke] = data;
    console.log(poke.name, joke.value);
    console.log(`
    ${poke.name}
    ${joke.value}
    `)
})
