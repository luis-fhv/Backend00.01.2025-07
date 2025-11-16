Proceso ejercicio21
	//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	Definir num, i, factorial Como Entero
	
    Escribir "Ingrese un número entero positivo:"
    Leer num
	
    Si num < 0 Entonces
        Escribir "El número debe ser positivo."
    Sino
        factorial <- 1
        Para i <- 1 Hasta num Con Paso 1
            factorial <- factorial * i
        FinPara
		
        Escribir "El factorial de ", num, " es: ", factorial
    FinSi
FinProceso
