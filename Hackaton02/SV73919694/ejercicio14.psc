Proceso ejercicio14
	//Hacer un algoritmo en Pseint que lea un entero 
	//positivo del 1 al diez y al 9 y determine si es un número primo.
	Definir num Como Entero
    Definir es_primo Como Logico
	
    Escribir "Ingrese un número del 1 al 10:"
    Leer num
	
    Si num < 1 O num > 10 Entonces
        Escribir "El número está fuera del rango permitido."
    Sino
        Si num = 2 O num = 3 O num = 5 O num = 7 Entonces
            es_primo <- Verdadero
        Sino
            es_primo <- Falso
        FinSi
		
        Si es_primo Entonces
            Escribir "El número ", num, " es primo."
        Sino
            Escribir "El número ", num, " no es primo."
        FinSi
    FinSi
FinProceso
