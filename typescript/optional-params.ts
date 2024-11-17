function display(message?:string)
{
    console.log('Message ',message);
}
display();
display('Hello')

function displayWithDefault(message:string = 'Hello')
{
    console.log('displayWithDefault ',message);
}
displayWithDefault();
displayWithDefault('hi')