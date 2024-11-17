interface StringArray {
    [index: number]: string;
}
let strArr:StringArray = ['apple','Orange',"Banana"]
console.log(strArr[0]);

interface Mapping {
    [key: string]: any;
}
let obj:Mapping = {
    name : "John",
    age : 30
};
console.log('Obj ',obj['name']);