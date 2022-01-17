const loopFunction = () => {
    for (let i = 0; i < 10; i++) { // con var arroja 10 veces 10, con let arroja 0 a 9
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
};

loopFunction(); 