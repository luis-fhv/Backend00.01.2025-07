//Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

const presentar = (nombre, apellido, edad) => {
  return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
};
console.log(presentar("luis", "huamani", 21));

//Cree una función que tome números y devuelva la suma de sus cubos.

const sumOfCubes = (...nums) => {
  return nums.reduce((total, n) => total + n ** 3, 0);
};
console.log(sumOfCubes(1, 5, 9));

//Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

const tipoDeValor = (valor) => typeof valor;
console.log(tipoDeValor(123));
console.log(tipoDeValor("hola")); 
console.log(tipoDeValor(true));        
console.log(tipoDeValor(undefined));  
console.log(tipoDeValor(null)); 

//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

const sumarTodo = (...numeros) => {
  return numeros.reduce((total, n) => total + n, 0);
};

console.log(sumarTodo(1, 2, 3));    
console.log(sumarTodo(10, 220));  

//Crear una función que reciba un array de valores y filtre los valores que no son string

const filtrarStrings = (arr) => arr.filter(item => typeof item === "string");
const valores = [1, "hola", true, "dios", 50, null, "como"];

console.log(filtrarStrings(valores));

//Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden

const minMax = (arr) => [Math.min(...arr), Math.max(...arr)];
console.log(minMax([1, 2, 3, 4, 5])); 

//Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.

const formatPhoneNumber = (nums) => {
  return `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`;
};
console.log(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

//Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.

const findLargestNums = (matriz) => matriz.map(arr => Math.max(...arr));
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));

//Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
const charIndex = (palabra, char) => {
  const first = palabra.indexOf(char);
  const last = palabra.lastIndexOf(char);
  return first === -1 ? undefined : [first, last];
};

console.log(charIndex("hola", "a"))
//Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.

const toArray = (obj) => Object.entries(obj);

console.log(toArray({ a: 1, b: 2 }))


//Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

const getBudgets = (arr) => arr.reduce((total, p) => total + p.budget, 0);
console.log(
  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
  ])
);



//Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.

const getStudentNames = (arr) => arr.map(e => e.name);


//Escriba una función que convierta un objeto en una matriz de claves y valores.

const objectToArray = (obj) => Object.entries(obj);


//Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.

const squaresSum = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i * i;
  return total;
};

//Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada

const multiplyByLength = (arr) => arr.map(n => n * arr.length);


//Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.



//Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.

const countdown = (n) => {
  const res = [];
  for (let i = n; i >= 0; i--) res.push(i);
  return res;
};

//Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.

const filterList = (arr) => arr.filter(x => typeof x === "number");


//Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.

const repeat = (element, times) => Array(times).fill(element);

//Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.

const findNemo = (str) => {
  const words = str.split(" ");
  const index = words.indexOf("Nemo");
  return index === -1
    ? "Nemo not found!"
    : `I found Nemo at ${index + 1}!`;
};


//Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".

const capLast = (str) =>
  str
    .split(" ")
    .map(word => word.slice(0, -1) + word.slice(-1).toUpperCase())
    .join(" ");

