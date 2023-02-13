'use strict';

function BinarioADecimal(num) {
   var arrayProv= num.split("")
    var arrayBinario = arrayProv.reverse()
   var resultado = 0;
   var contador = 0;
   arrayBinario.forEach(element => {
      resultado += element * (Math.pow(2, contador))
      contador++
   });
    return resultado
}

function DecimalABinario(num) {
   var arr=[];
   arr.unshift(num%2)
   var algo = Math.floor(num/2)
   while(algo !== 0){
      arr.unshift(algo%2)
      algo = Math.floor(algo/2)
   }
    return arr.join("")
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
