/*
function getFirstElement(arr: any[]):any {
    return arr[0];
}*/
function getFirstElement<Type>(arr: Type[]):Type {
    return arr[0];
}
console.log('first element ',getFirstElement<number>([1,2,3,4]));
console.log('first element ',getFirstElement(['one','two','three']));