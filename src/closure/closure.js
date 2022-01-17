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
