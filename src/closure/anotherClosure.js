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