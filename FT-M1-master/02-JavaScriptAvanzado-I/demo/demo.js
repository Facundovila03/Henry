var x = 10;

function saludar() {
  console.log("hola");
}

function miFuncionFavorita() {
  var y = 20;
  console.log(x);
  console.log(y);
  saludar();
}

miFuncionFavorita();

// console.log(x);
// console.log(y);

// function saludar() {
//   console.log("hola", this);
// }

// saludar();

// var persona = {
//   nombre: "Jorge",
//   saludar: function () {
//     console.log(this.saludar());
//   },
// };

// persona.saludar();

// function miFuncion() {
//   console.log(x);
//   var x = 10;
// }

// miFuncion();

// console.log(y);
// var y = 15;

// ! let y const => NO HACEN HOISTING
// ! MAS DETALLES SOBRE LET Y CONST => M2

// var nombre = "Jorge";

// nombre = 15;

// nombre = [1, 2, 3];

// console.log("hola" + 1);

// console.log("1" + 1);
