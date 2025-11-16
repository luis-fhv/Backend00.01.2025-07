Proceso ejercicio40
	//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi 
	//con la serie de Nilakantha. La formula que se debe aplicar es:
    //Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14)
	Definir n, i Como Entero
    Definir aproximacion, termino Como Real
	
    Escribir "Ingrese la cantidad de términos para la aproximación:"
    Leer n
	
    aproximacion <- 3
	
    Para i <- 2 Hasta 2 + (n - 1) * 2 Con Paso 2 Hacer
        termino <- 4 / (i * (i + 1) * (i + 2))
		
        Si ((i - 2) / 2) % 2 = 0 Entonces
            aproximacion <- aproximacion + termino
        Sino
            aproximacion <- aproximacion - termino
        FinSi
    FinPara
	
    Escribir "Aproximación de ? con ", n, " términos: ", aproximacion
FinProceso
