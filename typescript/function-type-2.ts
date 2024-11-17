function execute(f:Function)
{
    console.log('Execute');
    f();
}
execute(function(){
    console.log('Greet');
});