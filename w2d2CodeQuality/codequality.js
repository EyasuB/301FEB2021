function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++)
    { result *= x; }
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');
if (n <= 0) {
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else {
    alert(pow(x, n))
}

const greeting = (word) => {

    return word.toUpperCase()
}

const speaker = (message, callback) => {
    return callback(message)
}





describe.only('Testing challenge 1', () => {
    test('It should return the message with all uppercase characters', () => {
        expect(speaker('hello 301 students!', greeting)).toStrictEqual('HELLO 301 STUDENTS!');
    });
});