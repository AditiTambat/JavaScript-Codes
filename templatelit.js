
// template literals in js are use for concattination of values
// we pass as an argument 
// it use ` ` this for sentence printing and ${name} for parameter and passing value in this in log .
function sentance(name, age){
    return `My name is ${name} and I am ${age} years old .`;
    
}
console.log(sentance("Dikshitra",25));


var intro = (sub) => `Hello , this is my Practice session of ${sub}`;
console.log(intro("Javascript"));
