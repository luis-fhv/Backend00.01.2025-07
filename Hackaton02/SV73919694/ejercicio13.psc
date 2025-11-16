Proceso ejercicio13
	//Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
	Definir letra Como Caracter
	
    Escribir "Ingrese una letra:"
    Leer letra
	
    letra <- Minusculas(letra)  // Convierte la letra a minúscula para simplificar la comparación
	
    Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
        Escribir "La letra es una vocal."
    Sino
        Escribir "La letra no es una vocal."
    FinSi
FinProceso
