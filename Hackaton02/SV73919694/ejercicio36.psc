Proceso ejercicio36
	//Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
	Definir n, i, a, b, c Como Entero
	
    Escribir "¿Cuántos términos de la serie Fibonacci desea ver?"
    Leer n
	
    a <- 0
    b <- 1
	
    Escribir "Serie de Fibonacci:"
    Escribir a
    Escribir b
	
    Para i <- 3 Hasta n Hacer
        c <- a + b
        Escribir c
        a <- b
        b <- c
    FinPara
FinProceso
