function createCalculator() {
    let total = 0;

    function add(value) {
        total += value;
        return total;
    }
    function subtract(value) {
        total -= value;
        return total;
    }
    function multiply(value) {
        total *= value;
        return total;
    }
    function divide(value) {
        total /= value;
        return total;
    }
    function clear(value) {
        total = 0;
        return total;
    }
    function getTotal(value) {
        return total;
    }

    return {
        add,
        subtract,
        multiply,
        divide,
        clear,
        getTotal
    }
}


const calculator1 = createCalculator()
calculator1.add(10)
console.log(calculator1.getTotal());

const calculator2 = createCalculator()
calculator2.add(10)
calculator2.subtract(-10)
console.log(calculator2.getTotal());

const calculator3 = createCalculator()
calculator3.add(10)
calculator3.subtract(-10)
calculator3.clear()
console.log(calculator3.getTotal());