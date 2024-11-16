type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function isEven(value: number): boolean {
    return value % 2 === 0;
}
isEven.description = "Is the number even?";
let fn :DescribableFunction = isEven;
console.log('is even ',fn(2));