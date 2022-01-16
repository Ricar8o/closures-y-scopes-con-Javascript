const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();
console.log(fruit); // error


const anotherFunction = () => {
    var x = 1;
    var x = 2; // si deja reasignarla de est manera pero no es lo ideal.
    let y = 1;
    let y = 2; // error
    console.log(x);
    console.log(y);
}

anotherFunction();