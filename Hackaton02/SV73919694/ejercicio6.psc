Proceso ejercicio6
	//Hacer un algoritmo en Pseint para ayudar a un trabajador 
	//a saber cu�l ser� su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
	//se le pagar� $20 por hora, pero si trabaja m�s de 40 horas 
	//entonces las horas extras se le pagar�n a $25 por hora.
	
	Definir horas, horas_extras, sueldo_base, sueldo_extra, sueldo_total Como Real
	Escribir "ingrese la cantidad de horas trabajadas en la semana:"
	Leer  horas
	sueldo_base <- 0
	sueldo_extra <- 0
	
	si horas <= 40 Entonces
		sueldo_base <- horas * 20
	SiNo
		sueldo_base <- 40 * 20
		horas_extras <- horas - 40
		sueldo_extra <- horas_extras * 25
	FinSi
	sueldo_total <- sueldo_base + sueldo_extra
	
	Escribir "sueldo bse (40h o menos): $", sueldo_base
	Escribir "pago por horas extras: $", sueldo_extra
	Escribir "sueldo total a recibir: $", sueldo_total
FinProceso
