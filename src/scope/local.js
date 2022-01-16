const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();

console.log(hello); // error porque no encuentra la variable hello, porque se definio de manera local


const functionScope = () => {
    var scope = "I am just a local var";
    const func = () => {
        return scope
    }
    console.log(func());
};


functionScope();