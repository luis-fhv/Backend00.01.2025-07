Proceso ejercicio15
	//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
	Definir centimetros, pulgadas, libras, kilogramos Como Real
	
    Escribir "Ingrese la cantidad en centímetros:"
    Leer centimetros
	
    // 1 pulgada = 2.54 centímetros
    pulgadas <- centimetros / 2.54
	
    Escribir "Equivale a ", pulgadas, " pulgadas."
	
    Escribir "Ingrese la cantidad en libras:"
    Leer libras
	
    // 1 libra = 0.453592 kilogramos
    kilogramos <- libras * 0.453592
	
    Escribir "Equivale a ", kilogramos, " kilogramos."
	
FinProceso
