interface TwoD{
    x: number;
    y: number;
}
interface ThreeD extends TwoD{
    z : number
}
function showPos(pos:TwoD){
    console.log('x ',pos.x);
    console.log('y ',pos.y);
}
let obj:ThreeD = {
    x:12,
    y:20,
    z : 29
}
showPos(obj as TwoD);