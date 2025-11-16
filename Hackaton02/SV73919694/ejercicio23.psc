Proceso ejercicio23
	//Hacer un algoritmo en Pseint para calcular la suma 
	//de los números impares menores o iguales a n.
	Definir n, i, suma Como Entero
	
    Escribir "Ingrese el valor de n: "
    Leer n
	
    suma <- 0
	
    Para i <- 1 Hasta n Con Paso 1 Hacer
        Si i MOD 2 <> 0 Entonces
            suma <- suma + i
        FinSi
    FinPara
	
    Escribir "La suma de los impares menores o iguales a ", n, " es: ", suma
FinProceso
