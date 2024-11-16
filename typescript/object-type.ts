type Human ={
    name:string,
    age? : number
}
function display(obj:Human) {
    console.log("Name ",obj.name);
    console.log("Age ",obj.age);
} 
display({
    name :"TK",
    //age :40
});
