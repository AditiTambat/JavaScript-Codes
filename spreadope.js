

function spread(){
    arrname = ["radha","gopi","meera"];
    arrname2 = ["krishna","raam"];
    mergearr =[...arrname, ...arrname2];

    return mergearr;
}
console.log(spread());


const arr1 = [1,2,3,4];
const arr2 = [5,6];

const merge = [...arr1, ...arr2, 10];
console.log(merge);


// object
const person = { 
    name:"Geeta",
    age: 25
}

const personinfo = {
    ...person,
    city:"pune"
}

console.log(personinfo);
