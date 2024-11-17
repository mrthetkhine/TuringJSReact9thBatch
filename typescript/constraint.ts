function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
}
console.log('Longest ',longest([1,2,3,4],[4,5,6]));
console.log('Longest ',longest("Hello","Hello World"));
//console.log('longest ',longest(1,2));