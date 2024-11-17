type Position = {
    x : number,
    y : number
}
function showPos({x,y}:Position){
    console.log('x ',x);
    console.log('y ',y);
}
showPos({x:1,y:2});