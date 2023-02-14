# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
   las variables declaradas con var limitan su scope a donde fueron declaradas, si directamente le asignamos un valor son globales,a demas se crean antes ejecutar el codigo (en el LE) en cambio las que no son declaradas por var no existen hasta que se les da un valor.
```javascript
x = 1;                 //da el valor 1 a x
var a = 5;           declara a como und   //da el valor 5 a a
var b = 10;          declara b como und   //da el valor 10 a b
var c = function (a, b, c) {   declara c como und    //da la funcion completa como valor de c
   var x = 10;                *crea la variable x como und   // asgina 10 a x
   console.log(x);                                          //loguea x o sea 10
   console.log(a);                                          // loguea a como argumento ed la funcion o sea 8
   var f = function (a, b, c) {  *crea la vartiable f como la funcion completa
      b = a;                  cre b como und // asgina a b el valor de a que fue pasao como argumento desde la funcion c o sea 8
      console.log(b);                        // loguea b o sea 8
      b = c;                  crea b como und //asigna a b el valor de se que fue pasado como argumento desde la funcion c o sea 10
      var x = 5;              crea x // asgina a x el valorde 5
   };
   f(a, b, c); // llama a la funcion lo q me lleva a *1 
   console.log(b);            //loguea b que, como la funcion f ya se ejecuto, se esfuma por lo que toma el valor de b recibido como argumento o sea 9
};
c(8, 9, 10);      //ejecuta esta funcion lo que me lleva a *
console.log(b);         //loguea 10
console.log(x);         //loguea 1
```

```javascript
console.log(bar);                                         //loguear undefined
console.log(baz);                                         //reference error porque baz no se decalro en el LE por que no tiene var
foo();                                                    //no se ejecuta mas nada porque ya  tiro error antes
function foo() {                
   console.log('Hola!');                                    
}
var bar = 1;                           
baz = 2;                                                
```

```javascript
var instructor = 'Tony';            crea la varibale isntructor      //asigna "tony" a instructor
if (true) {                                                          //se ejecuta el if porque la condicion es verdadera 
   var instructor = 'Franco';                                        //cambia el valor de instructor a 'franco'
}
console.log(instructor);                                                //loguea franco
```

```javascript
var instructor = 'Tony';            crea la variable instructor      //asigna tony a instructor
console.log(instructor);                                             //loguea tony
(function () {                      declara la fuincion
   if (true) {                                                    
      var instructor = 'Franco';                                     //asigna franco a instructor
      console.log(instructor);                                       //logue Franco
   }
})();
console.log(instructor);                                             //loguea tony
```

```javascript
var instructor = 'Tony';            declara isntructor como und            //asigna a instructor el str 'tony'
let pm = 'Franco';                  no se inicializa porque es un let      //crea la variable pm con valor 'franco'
if (true) {                            
   var instructor = 'The Flash';                                           //cambia e lvalor de isntructor a 'theflash'
   let pm = 'Reverse Flash';                                    //crea una variable pm con valor 'reverse flash', como esta en otro contexto si se puede redefinir a pesar de ser let
   console.log(instructor);                                 //loguea the flash
   console.log(pm);                                         //loguea reverse flash
}
console.log(instructor);                                    //loguea tony
console.log(pm);                                            //loguea franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"  //2
"2" * "3"  //6
4 + 5 + "px"  //'9px'
"$" + 4 + 5 //$9
"4" - 2 //2
"4px" - 2  //'4px2'
7 / 0   //infinity
{}[0]  
parseInt("09") //9
5 && 2  //2
2 && 5  //5
5 || 0  //0
0 || 5 //0
[3]+[3]-[10] //23 lo q hace es sumar los 3 como string y ahi transformarle a numero y restar diez por eso queda 33
3>2>1  //false
[] == ![]     //true no entiendo pq 
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {                
   console.log(a);                                             //loguea undefined
   console.log(foo());                                         //loguea 2

   var a = 1;              crea la variable a
   function foo() {        declara la variable completa
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';          crea la variable snack                    //asigna meow mix a snack

function getFood(food) {            declara la funcion completa            //no se ejecuta el if porque la condicion es false entonces el else me retorna undefined, porque dentro de 
   if (food) {                                                             //esta funcion nunca se de claro snack
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';        
var obj = {                         
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // aurelio de la rosa

var test = obj.prop.getFullname;

console.log(test()); //juan perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
```
