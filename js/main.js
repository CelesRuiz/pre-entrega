
// Agregar cantidad de productos al carrito //
for (let i = 1; i <= 10; i++) {
    const resultado = i;
    console.log("Cantidad de mancuernas agregadas al carrito = " + resultado);
}

for (let i = 1; i <= 10; i++) {
    const resultado = i;
    console.log("Cantidad de Pesas rusas agregadas al carrito = " + resultado);
}

// Producto Agotado //
const STOCKDISPONIBLE = 5; 

if (STOCKDISPONIBLE === 0) {
    alert("Este producto está agotado en este momento. Lo sentimos.");
} else {
    const CONFIRMACION = prompt("Tenemos en stock este producto. ¿Deseas agregarlo al carrito? Si o No");

    if (CONFIRMACION==="si") {
        alert("Se ha agregado con exito.")
    } else {
        alert("Entendido, no se ha agregado el producto al carrito.");
    }
}
