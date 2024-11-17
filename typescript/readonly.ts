interface Address {
    street :string;
    city :string;
}
interface Person {
    readonly name: string;
    age: number;
    readonly address: Address
}
let p:Person = {
    name:   "John",
    age:    30,
    address: {
        street: "123 Main St",
        city:   "Anytown"
    }
};
//p.name = "Hello";
/*
p.address = {
    street: "124 Main St",
    city: "Anywhere"
}*/
p.address.street = "124 Main St";
console.log(p);