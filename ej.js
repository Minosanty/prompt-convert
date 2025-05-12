function convertCurrency(pesos) {
    let tasa = 0.056; // Supongamos que 1 peso = 0.056 dólares
    let dolares = pesos * tasa;
    return dolares;
}

let resultado = convertCurrency(1000); // Llama a la función con 1000 pesos
console.log("Equivalente en dólares: " + resultado);
