interface Pair<T, U> {
    first: T;
    second: U;
    getFirst(): T;
    getSecond(): U;
}
let pair : Pair<string, number> = {
    first : "Hello",
    second : 123,
    getFirst() {
        return this.first;
    },
    getSecond() {
        return this.second;
    }
}
console.log("first ",pair.getFirst());
console.log("second ",pair.getSecond());