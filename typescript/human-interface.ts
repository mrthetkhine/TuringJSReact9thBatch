interface Human{
    name: string;
    age : number;
    display:()=>void
}
let h1: Human = {
    name : "John",
    age : 30,
    display(){
        console.log('Name ',this.name);
        console.log('Age ',this.age);
    }
}
let h2:Human={
    name : "John Wick ",
    age : 50,
    display(){  
        console.log('Name ',this.name);
        console.log('Age ',this.age);
    }
}
h1.display();
h2.display();