Proceso ejercicio18
	//Hacer un algoritmo en Pseint para una empresa se encarga 
	//de la venta y distribución de CD vírgenes. 
	//Los clientes pueden adquirir los artículos (supongamos un único 
	//producto de una única marca) por cantidad. Los precios son:
	//$10. Si se compran unidades separadas hasta 9.
    //$8. Si se compran entre 10 unidades hasta 99.
	//$7. Entre 100 y 499 unidades.
	//$6. Para mas de 500 unidades.
	//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en 
	//Pseint que dado un número de CDs a vender calcule el precio total para el cliente 
	//y la ganancia para el vendedor.
	Definir cantidad Como Entero
	Definir precioUnitario, precioTotal, ganancia Como Real
	Escribir "ingrese la cantidad de CDS a vender: "
	Leer cantidad
	si cantidad <= 9 Entonces	
		precioUnitario <- 10
	SiNo
		si cantidad >= 10 y cantidad <= 99
			precioUnitario <- 8
		SiNo
			si cantidad >= 100 y cantidad <= 499
				precioUnitario <- 7
			SiNo
				precioUnitario <- 6
			FinSi
		FinSi
	FinSi
	precioTotal <- cantidad * precioUnitario
	ganancia <- precioTotal * 8.25 / 100
	Escribir "+----------------------------------------+"
	Escribir "Cantidad de CDs: ", cantidad
	Escribir "Precio Unitario: $", precioUnitario
	Escribir "Precio total: $", precioTotal
	Escribir "Ganancia: $", ganancia
	Escribir "+----------------------------------------+"

FinProceso
