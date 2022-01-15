# Scope:

Es el alcance que va a tener una variable dentro del código. En otras palabras, el Scope se encargará de decidir a que bloques de código va a acceder una variable.

**Global Scope** : No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.

- Con **var** podemos re-asignar una variable pero es una mala práctica.
- Con **let** y **const** no podemos, aparecerá un error.
- Es una mala práctica crear una variable sin las palabras reservadas: **var**, **let** y **const**. Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
- La doble asignación de una variable también es una mala práctica.