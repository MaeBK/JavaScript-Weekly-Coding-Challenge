//Very Easy
var x=6;
var y=4;
var z= (x - y)
console.log("The diffrence between " + (x) + " and " + (y) + " is " + (z));

//Easy

//Medium
var userInput=prompt(`Are you loud, quiet, or talking normally?`);
if(userInput==userInput.toUpperCase()){
    console.log ("Please stop yelling...")
}
else if(userInput==userInput.toLowerCase()){
    console.log("I'm sorry? You'll need to be a little louder.")
}
else{
    console.log("There we go,now how can I help?")
}

//Hard

//Very Hard
const operator=prompt(`Enter operation symbol ( either +, -, *, or /):`);
const number1 = parseFloat(prompt(`Enter first #: `));
const number2 = parseFloat(prompt(`Enter second #: `));

let result;
if(operator=='+'){
    result=number1+number2;
}
else if(operator=='-'){
    result=number1-number2;
}
else if(operator=='*'){
    result=number1*number2;
}
else{
    result=number1/number2;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);