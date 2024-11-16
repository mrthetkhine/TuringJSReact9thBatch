class Human
{
    name : string;
    constructor(name:string) {
        this.name = name;
        console.log('Human constructor');
    }
}
class Teacher extends Human
{
    constructor(name:string) {
        super(name);
        console.log('Teacher constructor');
    }
}
type SomeConstructor = {
    new (s: string): Human;
};
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
let obj = fn(Human);
console.log('Obj ',obj);

let obj2 = fn(Teacher);
console.log('Obj2 ',obj2);