const fruits = () => {
    if (true) {
        var fruit1 = 'apple';
        let fruit2 = 'orange';
        const fruit3 = 'kiwi';
        console.log(fruit2);
        console.log(fruit3);
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
// Var tiene un scope de función mientras que let y const tienen un scope de bloque. 

let x = 1;
{
    let x = 2;
    console.log(x);
}
// aqui x son dos un x global y un x local.
console.log(x);

var x = 1;
{
    var x = 2;
    console.log(x);
}
// aquí x es uno solo. por el alcance de var
console.log(x);