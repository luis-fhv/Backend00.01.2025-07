Proceso ejercicio26
	//Hacer un algoritmo en Pseint para calcular el resto 
	//y cociente por medio de restas sucesivas.
	Definir divid, divis, cocie, res Como Entero
	Escribir "ingrese el dividendo:"
	Leer divid
	Escribir "ingrese el divisor:"
	Leer divis
	cocie <- 0
	res <- divid
	Mientras res >= divis Hacer
		res <- res - divis
		cocie <- cocie
	FinMientras
	Escribir "Cociente: ", cocie
	Escribir "Resto: ", res
FinProceso
