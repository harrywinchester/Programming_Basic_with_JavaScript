// Object Oriented Programming 
// class Car {
//     wheel = 4 ; 
//     color = "black";
//     drive (){
//         console.log("They see me rolling :3");
//     }
// }
// let carOne = new Car;
// console.log(carOne.color);
// let carTwo = new Car;
// carTwo.color="red";
// console.log(carTwo.color);


// Static Property 
// class Calculator{
//     static PI=3.14;
//     plus(n1,n2){
//         return n1+n2;
//     }
//     minus(n1,n2){
//         return n1-n2;
//     }
//     multiply(n1,n2){
//         return n1*n2;
//     }
//     division(n1,n2){
//         return n1/n2;
//     }
//     remainder(n1,n2){
//         return n1%n2;
//     }
// }
// let calculator = new Calculator;
// console.log(calculator.plus(1,2));
// console.log(Calculator.PI);
// console.log(Math.PI);


// This key word in class 
// class Calculator{
//     PI=3.14;
//     static Name = "Harry";
//     static helo = "this is " +this.Name;
//     area(r){
//         return this.PI*r**2;
//     }
//     volume(r,h){
//         return this.area(r)*h;
//     }
//     static info(){
//         let calculator = new Calculator
//         console.log("I am " +this.Name);
//         console.log("I am " +calculator.PI);
//     }
// }
// let calculator = new Calculator;
// console.log(calculator.area(2));
// console.log(calculator.volume(2,4));
// console.log(Calculator.helo);
// Calculator.info();


// Constructor 
// class Car {
//     Name= "";
//     wheels=4;
//     constructor(name,wheels){
//         this.Name = name;
//         this.wheels=wheels
//         this.drive();
//     }
//     drive(){
//         console.log(this.Name+ " is driving!");
//     }
//     getWheel(){
//         console.log(this.Name+" has "+this.wheels+" wheeles!")
//     }
// }
// new Car("Marcedes",4);
// let toyota = new Car("Toyota", 6);
// toyota.getWheel();


// Modifier 
// class Car {
//     Name = "Marcedes";
//     #hp=300;
//     getHorsePower(){
//         console.log("Horse Power is "+this.#hp);
//     }
// }
// let car = new Car;
// car.getHorsePower();


// Inheritance 
// class Animal {
//     #age=1; 
//     constructor(name){
//         this.Name=name
//     }
//     run(){
//         console.log(`${this.Name} is running`);
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log(this.Name+" Woof Woof!");
//     }
// }
// let dog = new Dog("Aung Nak");
// dog.bark();

// public => access anywhere 
// private => access only in own class 
// protected => access only in own class and child class