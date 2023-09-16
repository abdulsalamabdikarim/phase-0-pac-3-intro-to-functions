// Follow along with the examples here
function doNothing(){}
function sayHello(){
    console.log("Hello!");
}
sayHello();
function sayHelloToIsabel(){
    console.log("Hello, Isabel!")
}
sayHelloToIsabel();

function sayHelloToSofia(){
    console.log("Hello, Sofia!")
}
sayHelloToSofia();

function sayHelloToBrendan(){
    console.log("Hello, Brendan!")
}
sayHelloToBrendan();

// passing arguments to a function- e,g here it is "anything"
function doSomething(thing){
    console.log(thing);
}
doSomething("anything");

// using parameters - e.g here we use firstName
function sayHelloTo(firstName){
    console.log(`Hello, ${firstName}`);
}
sayHelloTo("Isabel");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

function say(greeting, firstName){
    console.log("firstName: ",firstName);
    console.log("greeting: ",greeting);
    console.log(`${greeting},${firstName}!`);
}
say("Goodbye","Julio");
//console.log(firstName);// firstName not defined outside function, gives error
say("Julio","hello");/* when we switch the argument places,
javascript can't tell and prints them as they are given,
storing the greeting argument in the firstName parameter
and vice versa*/

//return values in javascript
function add(x,y){
    return x+y;
}
add(1,2);// calls function,returns value but doesnt log it to the console
console.log(add(1,2)); //calls function, and logs result to the console
console.log(add(9000,80));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Sofia"));

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Sofia"));
  
  num1 = 2;
  num2 = 3;
  const sum = add(num1,num2);// add function already defined earlier
  const message = `The sum of your numbers is: ${sum}`;
  console.log(`${message}`);

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");// not executed, execution ends at return
  }
  console.log(say("Howdy", "partner"));

  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Howdy", "partner"));

  // PRACTICE
  function subtract(num1,num2){
    return num1-num2;
  }// this version has a return value
  console.log(`The difference of your numbers is: ${subtract(7,2)}`);
  
  //this version doesn't
  /*function subtract(num1,num2){
    console.log(num1-num2);
  }
  console.log(`The difference of your numbers is: ${subtract(7,2)}`);*/
