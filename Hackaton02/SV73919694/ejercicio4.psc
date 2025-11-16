Proceso ejercicio4
	//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Definir a, b, c, ordenar Como Entero
	Escribir "ingrese el primer numero"
	Leer a
	Escribir "ingrese el segundo numero"
	Leer b
	Escribir "ingrese el tercer numero"
	Leer c
	
	Si a > b Entonces
		ordenar <- a
		a <- b
		b <- ordenar
	FinSi
	
	Si a > c Entonces
		ordenar <- a
		a <- c
		c <- ordenar
	FinSi
	
	Si b > c Entonces
		ordenar <- b
		b <- c
		c <- ordenar
	FinSi
	Escribir "los numeros de menor a mayor son: ", a, ", ", b,", ",c
FinProceso
