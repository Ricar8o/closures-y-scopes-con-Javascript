// No guarda lo que le estoy pasando por ende no se forma un closure
const moneyBox = (coins) => {
    var savedCoins = 0;
    savedCoins += coins;
    console.log(`MoneyBox: ${savedCoins}`);
};

moneyBox(5);
moneyBox(10);

// Esto si es un closure, guarda en la memoria el valor
const moneyBox = () => {
    var savedCoins = 0;
    const saveCoins = (coins) => {
        savedCoins += coins;
        console.log(`MoneyBox: ${savedCoins}`);
    }
    return saveCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(8);


const miContador = (function() {
    let _contador = 0;

    function incrementar() {
        return _contador++;
    }

    function decrementar() {
        return _contador--;
    }

    function valor() {
        return _contador;
    }

    return {
        incrementar,
        decrementar,
        valor
    }
})();

console.log(miContador.valor());
console.log(miContador.incrementar());
miContador.incrementar();
miContador.incrementar();
console.log(miContador.valor());
console.log(miContador.decrementar());
console.log(miContador.valor());