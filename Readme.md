# Scope

Es el alcance que va a tener una variable dentro del código. En otras palabras, el Scope se encargará de decidir a que bloques de código va a acceder una variable.

**Global Scope** : No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.

- Con **var** podemos re-asignar una variable pero es una mala práctica.
- Con **let** y **const** no podemos, aparecerá un error.
- Es una mala práctica crear una variable sin las palabras reservadas: **var**, **let** y **const**. Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
- La doble asignación de una variable también es una mala práctica.

# Lexical Scope / Ámbito Léxico:

 El intérprete de JavaScript funciona desde el ámbito de ejecución actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en ningún ámbito, se genera una excepción.

Este tipo de búsqueda se llama ámbito léxico. El alcance de una variable se define por su ubicación dentro del código fuente, y las funciones anidadas tienen acceso a las variables declaradas en su alcance externo. No importa de dónde se llame una función, o incluso cómo se llama, su alcance léxico depende solo de dónde se declaró la función.

# let, var & const

Las variables escritas con la palabra clave var pueden ser redeclaradas, pero esto a futuro puede darnos problemas, así que es mejor no usarla.

Las variables escritas con la palabra clave let no pueden ser redeclaradas, si lo haces mostrara un “error: esta variable ya ha sido declarada” , pero su valor puede ser reasignado

# Closure

(Clausuras o funciones de cierre)

Todo en JavaScript es un objeto.

Un **closure** es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función *recuerda* el ámbito en el que se creó. La mejor forma de entender un closure es por medio de un ejemplo práctico.

```jsx
var myVar = 'hi';
function myFunction() {
	console.log(myVar);
}
myFuntion(); // hi
```

Los closures son básicamente cuando aprovechamos la habilidad de JavaScript de usar las variables que están en el scope padre de nuestro bloque de código, por eso el global scope es un closure grandote; el bloque myFunction puede usar TODAS las variables que están disponibles en el bloque inmediato anterior.

Los Closures se usaban bastante como las clases antes de ES6, ya que es una manera de mantener variables casi privadas. Qué no se pueda acceder a ellas por fuera.

## Variables privadas con Closures

JS por su naturaleza no fomenta el uso de datos privados pero por medio de los Closures podemos crear valores que solo puedan ser accedidos por medio de métodos, que no van a estar disponibles fuera de esta función.