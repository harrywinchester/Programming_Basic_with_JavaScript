// Conditions (IF ELSE)
// let tired = prompt('Are you tired? "yes/no"');
// if (tired==="yes"){
//     console.log("Rest Well Harry!");
// }
// else if (tired==="no"){
//     console.log("Keep Grinding!");
// }
// else{
//     console.log("Please Enter yes or no");
// }

// let product_price = [100,300,500,800,100];
// product_price = product_price.map(price=>{
//     if(price===100)
//         price-=30
//     return price
// })
// console.log(product_price);

// let people = [
//     {name:"Harry", age:23},
//     {name:"Aung", age:23, gender:"m"},
//     {name:"Thaw",age:20, gender:"f"}
// ]
// people = people.map(person=>{
//     if(person.gender==="m")
//         person.gender="Male"
//     else if (person.gender==="f")
//         person.gender="Female"
//     else
//         person.gender="Unknown"

//     return person
// })
// console.log(people)

// IF ELSE EXPRESSION (TERNARY OPERATOR)
// let age  = 20;
// let Permission;
// if (age > 18){Permission = "Authorized"}
// else{Permission = "Unauthorized"}
// console.log(Permission)

// let Permission= age > 18? "authorized" : "unauthorized" ;
// console.log(Permission);


// Switch Statement 
// let people=[
//     {name:"Ye Lin Soe", age:23, gender:"m"},
//     {name:"Sai Sai Ye Yint Oo", age:25},
//     {name:"Su Su", age:23, gender:"f"}
// ]
// people = people.map((person)=>{
//     switch(person.gender){
//         case "m":
//             person.gender="Male"
//             break;
//         case "f":
//             person.gender="Female"
//             break;
//         default:
//             person.gender="Undefined"
//     }
//     return person;
// })
// console.log(people);


// While Loop 
// let people=["Harry","SaiSai","MgMg","PaingPaing","TokeToke","KoPyae"];
// let x = 0; 
// while(x<people.length){
//     console.log(people[x]);
//     x++;
// }


// Do While Loop 
// let x=0;
// do{
//     console.log("work"+x);
//     x++;
// }while(x<5)

// For Loop 
// let people=["Harry","SaiSai","MgMg","PaingPaing","TokeToke","KoPyae"];
// for(let x=0; x<people.length; x++){
//     console.log(people[x]);
// }

// For of Loop 
// let people=["Harry","SaiSai","MgMg","PaingPaing","TokeToke","KoPyae"];
// for (person of people){
//     console.log(person);
// }

// For in Loop 
// let person = {
//     name:"Ye Lin Soe",
//     age:23
// };
// for (key in person){
//     console.log(`${key} is ${person[key]}`);
// }

// let people=["Harry","SaiSai","MgMg","PaingPaing","TokeToke","KoPyae"];
// for (key in people){
//     console.log(`${key} is ${people[key]}`);
// }
