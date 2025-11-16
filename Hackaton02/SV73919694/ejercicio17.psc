Proceso ejercicio17
	// hacer un algoritmo en Pseint donde se ingreseuna 
	//hora y nos calcule la hora dentro de un segundo
	Definir h, m, s Como Entero
	Escribir "ingrese hora (0-23):"
	Leer h
	Escribir "ingrese minutos (0-59):"
	Leer m
	Escribir "ingrese segundos (0-59):"
	Leer s
	//sumar un segundo
	s <- s + 1
	Si s = 60 Entonces
		s <- 0
		m <- m + 1
		Si m = 60 Entonces
			m <- 0
			h <- h + 1
			Si h = 24 Entonces
				h <- 0
			FinSi
		FinSi
	FinSi
	Escribir "Dentro de un segundo será: ", h, ":", m, ":", s
FinProceso
