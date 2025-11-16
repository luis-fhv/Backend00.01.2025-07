Proceso ejercicio33
	//Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
	Definir continuar Como Caracter
    continuar <- "S"
	
    Mientras continuar = "S" o continuar = "s" Hacer
        // Aquí va el bloque principal del programa
        Escribir "¡Bienvenido! Esto es una acción dentro del programa."
        
        // Preguntar si desea continuar
        Escribir "¿Desea continuar? (S/N):"
        Leer continuar
    FinMientras
	
    Escribir "Gracias por usar el programa. ¡Hasta la próxima!"
FinProceso
