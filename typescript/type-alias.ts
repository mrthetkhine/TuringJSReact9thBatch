type MyNumber = number;

let data : MyNumber = 123;
let result = data * 3;
console.log(result);

type Animal = {
    name: string;
}
  
type Bear = Animal & { 
honey: boolean;
}
  
const bear = {
    name: "Yogi",
    honey: true,
};
console.log(bear);