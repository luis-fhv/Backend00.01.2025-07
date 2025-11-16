//Crea una función que retorne la suma de dos números.
function sumar(a, b) {
  return a + b;
}

console.log(sumar(4,2));

//Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

function potencia(numero, exponente) {
  return Math.pow(numero, exponente);
}

console.log(potencia(3,4));

//Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

function sumaDeCubos(...numeros) {
  return numeros.reduce((total, num) => total + Math.pow(num, 3), 0);
}
console.log(sumaDeCubos(1,5,9))
    

//Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3

function triArea(base, altura) {
  return (base * altura) / 2;
}
console.log(triArea(3,2))

//Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

function calculator(num1, operacion, num2) {
  switch (operacion) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case 'x':
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return num1 % num2;
    default:
      return "El parámetro no es reconocido";
  }
}
console.log(calculator(2,'+',3))