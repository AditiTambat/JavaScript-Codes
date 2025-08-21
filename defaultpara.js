function para(name ="guest"){
    return `Hello, ${name}`;
}

console.log(para("Sara"));
console.log(para());


// arrow function

const defaultpara = (word = "my dear") => `hey ${word}`;
console.log(defaultpara());
console.log(defaultpara("friend"));


