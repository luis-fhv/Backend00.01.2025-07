Proceso ejercicio27
	//Hacer un algoritmo en Pseint para determinar la media de una lista 
	//indefinida de números positivos, se debe acabar el programa 
	//al ingresar un número negativo.
	Definir num, suma, contador, media Como Real
	
    suma <- 0
    contador <- 0
	
    Escribir "Ingrese números positivos uno por uno (ingrese un número negativo para terminar):"
	
    Repetir
        Leer num
        Si num >= 0 Entonces
            suma <- suma + num
            contador <- contador + 1
        FinSi
    Hasta Que num < 0
	
    Si contador > 0 Entonces
        media <- suma / contador
        Escribir "La media de los ", contador, " números ingresados es: ", media
    Sino
        Escribir "No se ingresaron números válidos para calcular la media."
    FinSi
FinProceso
