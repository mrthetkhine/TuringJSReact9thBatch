class Human
{
    name :string='Default';
    age : number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
        console.log('Human constructor');
    }
    display(){
        console.log('Name ',this.name);
        console.log('Age ',this.age);
    }
}
class Teacher extends Human{
    subject : string;
    constructor(name:string,age:number,subject:string){
        super(name,age);
        this.subject = subject;
        console.log('Teacher constructor');
    }
    display(): void {
        super.display();
        console.log('Subject ',this.subject);
    }
}
let h1 = new Human('John',30);
h1.display();

let h2:Human = new Teacher('John Wick',50,'Karates');
h2.display();