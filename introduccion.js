let Divisa = 1300;
let conversion = "";

while (conversion !== "2") {
    conversion = prompt("1) Divisa (ARS -> USD)\n2) Salir");

    switch (conversion) {
        case "1":
           
            break;
        case "2":
            alert("Gracias por usar la app.");
            break;

        default:
            alert("Opción inválida. Elegí 1 o 2 .");
    }
}
