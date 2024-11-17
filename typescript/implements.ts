interface Flyable
{
    fly:()=>void
}
class Bird implements Flyable
{
    fly()
    {
        console.log('Bird Flying');
    }
}
class Plane implements Flyable
{
    fly()
    {
        console.log('Plane Flying');
    }
}
let flyable:Flyable = new Bird();
flyable.fly();

flyable = new Plane();
flyable.fly();