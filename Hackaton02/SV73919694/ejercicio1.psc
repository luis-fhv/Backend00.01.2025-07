Proceso ejercicio1
	//Hacer un algoritmo en Pseint que lea un n�mero por el teclado 
	//y determinar si tiene tres d�gitos.
	Definir numero Como Entero
	Escribir "Ingrese un numero: "
	Leer numero
	numero <- Abs(numero)
	si numero > 100 y numero <= 999 Entonces
		Escribir "el numero tiene tres digitos."
	SiNo
		Escribir "el numero no tiene tres digitos."
	FinSi
FinProceso
