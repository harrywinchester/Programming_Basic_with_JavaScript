// function shopping (product){
//     console.log("Go to Market");
//     console.log("Buy a "+product);
//     console.log("Go Back Home.");
// }
// shopping("pen");
// shopping("ruler");

// function add(num1,num2) {
//    return num1+num2;
// }
// console.log(add(1,2));
// let result = add(3,4);
// console.log(result+1);

// function sayName(name,age){
//     console.log(name,age);
//     return "hi";
// }
// let test=sayName("Ye Lin Soe",23);
// console.log(test);

// Homework
// function agecalculate(Birthyear){
//     let currentDate = new Date();
//     let currentYear = currentDate.getFullYear();
//     console.log("You are "+(currentYear-Birthyear)+" years old.");
// }
// agecalculate(2000);

// Default paramenter
// function add(a,b=0){
//     console.log(a+b);
// }
// add(2,3);

// Rest paramenter 
// function test (a,b, ... c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// test(1,2,3,4,5,6,7);

// Function Statement 
// myName();

// function myName(){
//     console.log("Ye Lin Soe");
// }

// Function Expression 
// let FEtest = function (tmessage) {
//     console.log(tmessage);
// }
// FEtest("This is Function Expression Test!");

// Callback function
// function sayMyName(name,fun){
//     let result=fun(name);
//     console.log(result);
// }
// sayMyName("ye lin soe", function(name){return name;})

// function twice(num, modifier){
//     let result = modifier(num)*2;
//     console.log(result);
// }
// twice(5, function(num){
//     return num + 6;
// });

// Arrow function 

// let sayHi=()=>{
//     console.log("hello");
// }
// sayHi();

// let sayHi=()=>console.log("Hello");
// sayHi();

// let sayHi=()=> "hello";
// console.log(sayHi());

// let sayHi=word=>word;
// console.log(sayHi("Hello"));
