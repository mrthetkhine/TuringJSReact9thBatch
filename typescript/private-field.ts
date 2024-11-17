class Data
{
    #data:string
    constructor(data:string)
    {
        this.#data = data;
    }
    display()
    {
        console.log('Data ',this.#data);
    }
}
let data = new Data("Hello");
data.display();
//console.log(data.#data);