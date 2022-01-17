// Hoisting de declaración de variable (La asignación no la hace al principio)
a = 2;
var a;
console.log(a);

console.log(a);
var a = 2;

// Hoisting en funcion 
nameOfDog('Charlotte');
function nameOfDog(name) {
    console.log(name);
}

nameOfDog('Charlotte');