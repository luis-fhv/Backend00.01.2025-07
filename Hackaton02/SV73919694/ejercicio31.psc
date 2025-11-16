Proceso ejercicio31
	//Hacer un algoritmo en Pseint parar calcular la media de 
	//los números pares e impares, sólo se ingresará diez números.
	Definir num, sumaPar, sumaImpar, contPar, contImpar Como Entero
    sumaPar <- 0
    sumaImpar <- 0
    contPar <- 0
    contImpar <- 0
	
    Para i <- 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer num
		
        Si num % 2 = 0 Entonces
            sumaPar <- sumaPar + num
            contPar <- contPar + 1
        Sino
            sumaImpar <- sumaImpar + num
            contImpar <- contImpar + 1
        FinSi
    FinPara
	
    Si contPar > 0 Entonces
        Escribir "Media de pares: ", sumaPar / contPar
    Sino
        Escribir "No se ingresaron números pares."
    FinSi
	
    Si contImpar > 0 Entonces
        Escribir "Media de impares: ", sumaImpar / contImpar
    Sino
        Escribir "No se ingresaron números impares."
    FinSi
FinProceso
