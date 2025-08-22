
function rest(){
   const n1 = {
        name:"abc",
        age:20,
        city:"xyz",
        gender:"male"
    };
    const {name, ...other} = n1; 
    return other
}
console.log(rest());





const num = [10,40,50,20];
const [a, ...nums] = num;
console.log(a);
console.log(nums);

