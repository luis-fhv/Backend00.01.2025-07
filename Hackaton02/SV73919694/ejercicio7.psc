Proceso ejercicio7
	//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento 
	//por compra a sus clientes con membresía dependiendo de su tipo, sólo existen 
	//tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	//Tipo A 10% de descuento
	//Tipo B 15% de descuento
	//Tipo C 20% de descuento
	
	Definir tipoMembresia Como Caracter
	Definir monto, desc, totalPagar Como Real
	
	Escribir "ingrese el tipo de membresia (A, B o C):"
	Leer tipoMembresia
	tipoMembresia <- Mayusculas(tipoMembresia)
	Escribir "ingrese el monto de la compra:"
	Leer monto
	
	desc <- 0
	
	si tipoMembresia = "A" Entonces
		desc <- monto * 0.10
	SiNo
		si tipoMembresia = "B" Entonces
			desc <- monto * 0.15
		SiNo
			si tipoMembresia = "C" Entonces
				desc <- monto * 0.20
			SiNo
				Escribir "tipo de membresia no valido. no aplica descuento."
			FinSi
		FinSi
	FinSi
	
	totalPagar <- monto - desc
	Escribir "descuento aplicado : $", desc
	Escribir "total a pagar: $", totalPagar
	
FinProceso
