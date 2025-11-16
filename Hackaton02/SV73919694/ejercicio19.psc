Proceso ejercicio19
	//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos 
	//de empleados ordenados de la siguiente forma con su número identificador 
	//y salario diario correspondiente:
    //Cajero (56$/día).
    //Servidor (64$/día).
    //Preparador de mezclas (80$/día).
	//Mantenimiento (48$/día).
    //El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que 
	//representen al número identificador del empleado y la cantidad de días que trabajó 
	//en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero 
	//que el dueño le debe pagar al empleado que ingresó
	
	Definir idEmpleado, diasTrabajados Como Entero
	Definir salarioDiario, pagoTotal Como Real
	
	Escribir "Ingrese el numero identificador del empleado:"
	Escribir "1 - Cajero"
	Escribir "2 - Servidor"
	Escribir "3 - Preparador"
	Escribir "4 - Mantenimiento"
	Leer idEmpleado
	
	Escribir "Ingrese la cantidad de dias trabajados en la semana (maximo 6d)"
	Leer diasTrabajados
	Segun idEmpleado Hacer
		1:
			salarioDiario <- 56
		2:
			salarioDiario <- 64
		3:
			salarioDiario <- 80
		4:
			salarioDiario <- 48
		De Otro Modo:
			Escribir "Error: identificador de empleado no valido"
	Fin Segun
	
	pagoTotal <- salarioDiario * diasTrabajados
	Escribir "+------------------------+"
	Escribir "Empleado ID: ",idEmpleado
	Escribir "Dias Trabajados: ",diasTrabajados
	Escribir "Salario Diario: $",salarioDiario
	Escribir "Pago Total: $",pagoTotal
	Escribir "+------------------------+"
FinProceso
