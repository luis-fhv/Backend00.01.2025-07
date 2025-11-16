Proceso ejercicio3
	//Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
	Definir numero Como Entero
	Escribir "ingrese un numero entero"
	Leer numero
	ult_digito <- abs(numero) % 10
	si ult_digito = 4 Entonces
		Escribir "El numero termina en 4"
	SiNo
		Escribir "el numero no termina en 4"
	FinSi
FinProceso
