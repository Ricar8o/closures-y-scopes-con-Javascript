var hello = 'Hello';
let world = 'Hello World';
const helloWorld = 'Hello world!';

// los datos definidos se definen como globales, por ello la función los muestra

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

// var permite reasignar el valor de una variables pero let y const no, muestra un error
var hello = 'Hello +';
let world = 'Hello World +';
const helloWorld = 'Hello world! +';

anotherFunction();

// De esta amnera se puede definir una variable global pero no es una buena practica

const defineGlobal = () => {
    globalVar = "Im global"
}

defineGlobal();
console.log(globalVar);

// mala practica #2

const anotherGlobal = () => {
    var localVar = globalVar = "Im Global"
}
anotherGlobal();
console.log(globalVar);