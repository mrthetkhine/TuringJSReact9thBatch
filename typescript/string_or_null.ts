function print(msg: string | null) {
    if (msg !=null) {
        console.log(msg.toLowerCase());
    }
    else
    {
        console.log('Empty');
    }
}
print(null)
print("Hello")

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}
liveDangerously(122)