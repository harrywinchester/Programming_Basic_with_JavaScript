// Creating Array with Object Constructor 
//  let mixture =new Array('Cat',5,1.5,true);
// let mixture = ["Cat",5,1.3,true]; 
// let bobo=mixture[0];
// console.log(mixture);
// console.log(bobo);
// mixture[4]="Ye Lin Soe";
// mixture[3]=false;
// console.log(mixture);

// let fruits = ["orange","apple"];
// fruits[2]="mango";
// console.log(fruits);
// console.log(fruits[fruits.length-1]);

// Nested Array 
// let arr = [
// ['a','b','c'],
// [1,2,3]
// ];
// console.log(arr);
// console.log(arr[0][1]);

// Spread Operator 
// let data1 = [1,2,3];
// let data2 = [4,5,6];
// let result = [...data1,...data2];
// console.log(result);

// let nums = [3,2];
// function add (a,b){
//     console.log(a+b);
// }
// console.log(add(...nums));

// Destructuing
// let data = ["Ye Lin Soe",23,"Gusto"];
// let name = data[0];
// let age = data[1];
// let university = data[2];
// let [name,age,university]=data;
// console.log(name,age,university);
// console.log(...data);

// Array Methods 
// let animals=["cat","dog","lion"];
// animals[3]="bird";
// animals.push("bird");
// console.log(animals);
// animals.pop();
// console.log(animals);
// animals.shift();
// console.log(animals);
// animals.unshift("cat");
// console.log(animals);
// console.log(animals.indexOf("lion"));
// animals.splice(0,1);
// console.log(animals);
// animals.join();
// console.log(animals);
// let test = animals.join('-');
// console.log(test);

// Map Method 
// let nums=[1,2,3,4,5];
// let newArr = nums.map((num)=> num+100)
// console.log(newArr);

// Filter Method 
// let nums=[1,2,3,4,5,6,7];
// let num1 = nums.filter((num)=>num%2===0);
// console.log(num1);
// let num2 = nums.filter((num)=>num%3===0);
// console.log(num2);
// let num3 = nums.filter((num)=>num!=3);
// console.log(num3);

// Reduce Method 
// let nums = [1,2,3,4,5,6,7];
// let result = nums.reduce((prev,current)=> prev+current);
// console.log(result);

// String Object 
// let str="hello";
// console.log(typeof str);

// let str1 = new String(" hello world again ");
// console.log(typeof str1);
// console.log(str1);
// console.log(str1.length);
// console.log(str1[2]);
// let test1 =str1.toUpperCase();
// console.log(test1);
// test1 = str1.toLowerCase();
// console.log(test1);
// str1=str1.trim();
// console.log(str1);
// str1=str1.split(" ");
// console.log(str1);

// let num = 12;
// console.log(typeof num);

// let num1 = new Number(12.6);
// console.log(typeof num1);
// num1 = num1.toFixed();
// console.log(num1);

// let bool = true;
// let bool1 = new Boolean(true);
// console.log(typeof bool);
// console.log(typeof bool1);


// Creating-Object
// let person={
//     name:"Ye Lin Soe",
//     age:23,
//     eat:function () {
//         console.log("Harry is eating!");
//     },
//     study(){
//         console.log("Harry is learning!");
//     }
// }
// person.height="172.5cm"
// person.sleep=function(){
//     console.log("Harry is sleeping!");
// }

// console.log(person);
// person.eat();
// person.study();

// dot notation 
// console.log(person.name);
  
// bracket notation 
// let propName="age";
// console.log(person[propName]);

// this 
// let person = {
//     name: "Harry",
//     eat(){
//         console.log(this.name+" is eating.");
//     }
// }
// person.eat();

// object spread 
// let obj1={
//     myName:"Ye Lin Soe",
//     myAge:23
// }
// let obj2={
//     myHairColor:"Black"
// }
// let obj3={ 
//     ... obj1, ... obj2
// }
// console.log(obj3);

// object destructring 
// let {name,age}={
//     name:"Ye Lin Soe",
//     age :23
// }

// property shorthand 
// let name = "Ye Lin Soe";
// let age = 23;
// let person = {
//     name,
//     age
// }
// console.log(person);

// Javascript Data Structure 
// let people=[
//     {name:"Ye Lin Soe",age:23,gender:"male"},
//     {name:"Aung Pyae Kyaw",age:23,gender:"male"},
//     {name:"Hla Hla",age:23,gender:"female"}
// ]

// let names=people.map(person=>{
//     return person.name;
// });
// console.log(names);

// let serachKeyword = prompt("search person : ")

// let filteredArray = people.filter(person=>{
//     return person.name.includes(serachKeyword);
// })
// console.log(filteredArray);

// Jason
// let person ='{"name":"Ye Lin Soe","age":23}';
// let obj = JSON.parse(person);
// console.log(obj);

// let person = {
//     name: "Ye Lin Soe",
//     age:23
// }
// let jas= JSON.stringify(person);
// console.log(jas);