// Asynchronous Javascript

// sync way  (Single Treaded Programming Language)
// console.log(1);
// console.log(2);

// async way (Multiple Treaded Programming Langauge) event loop, message queue, frame stack
// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log(3);
// }, 3000);
// console.log(4);

// Promise
// function synchronous(){
//     let result = 0;
//     for(let i=0; i<1000000000; i++){
//         result+=i;
//     }
//     return result;
// }
// console.log("work");
// console.log(synchronous());
// console.log("more important work");

// function asynchronous(){
//     return new Promise ((resolve,reject)=>{
//         let result = 0;
//         for(let i=0; i<1000000000; i++){
//             result+=i;
//         }
//         if(result){
//             resolve(result);
//         }
//         else{
//             reject("I have got some error!");
//         }
//     })
// }
// console.log("Work");
// asynchronous()
// .then((result)=>{
//     console.log(result);
//     console.log("After Async Task");
// })
// .catch((error)=>{
//     console.log(error);
// })
// console.log("More important work!");

// Fetch API (https://jsonplaceholder.typicode.com/)
// let userInput=prompt("Tell me User ID");
// fetch('https://jsonplaceholder.typicode.com/todos/'+userInput)
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("Fetching API goes wrong!");
// })

// Async Await
// async function fetchTodos(){
//     try{
//         let response= await fetch('https://jsonplaceholder.typicode.com/todos/');
//         console.log("Fetching API Compelete!");
//         let data =  await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// fetchTodos();
// console.log("Important");

// Coding Styles  https://google.github.io/styleguide/jsguide.html
// all cap
HELLO_WORLD;

// snake case
hello_world;

// camel case
helloWorld;

// capital case
HelloWorld;

// const PI = 3.14;
// let color_name = "black";
// let obj = {
//     propertyName : "name",
//     methodName(){

//     }
// }
// class MyCar{

// }

// let array = ['Harry','Aung Aung','Toke Toke'];
// let array = [
//     'Harry',
//     'Aung Aung',
//     'Toke Toke',//trailing comma
// ];

// if (conidtion) console.log("statement");
// else console.log('statement');

// if(conidtion){
//     console.log(statemenet);
//     console.log(statemenet);
// }
// else {
//     console.log(statemenet);
//     console.log(statemenet);
// }

// function test() {

// }
