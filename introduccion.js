let Divisa = 1300;
let conversion = "";

while (conversion !== "2") {
    conversion = prompt("1) Divisa (ARS -> USD)\n2) Salir");

    switch (conversion) {
        case "1":
            let montoarg = parseFloat(prompt("Ingrese su valor en pesos"));
            console.log(montoarg)
            if (montoarg > 0) {
                let resultadoUSD = montoarg / Divisa;
                alert(`$${montoarg} ARS equivale a $${resultadoUSD.toFixed(2)} USD.`);
            } else {
                alert("Por favor, ingresá un número válido mayor que cero.");
            }
            
            break;
        case "2":
            alert("Gracias por usar la app.");
            break;

        default:
            alert("Opción inválida. Elegí 1 o 2 .");
    }
}
