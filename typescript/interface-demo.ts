interface Human {
    name: string;
    age?: number;
   
}
interface Teacher extends Human
{
    subject : string
}
let h: Human  = {
    name : "John",
    age : 30,

};
console.log('h ',h);
let teacher : Teacher = {
    name : "John",
    age : 30,
    subject : "Maths"
}
h =  teacher;