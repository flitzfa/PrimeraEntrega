
/* Se usa una función con la propiedad lenght para recorrer los instrumentos musicales de una casa de venta de instrumentos iterando el array */

const instrumentos = ["Guitarra", "Bajo", "Batería", "Piano", "Saxo", "Trompeta", "Acordeón", "Violín", "Ukelele", "Congas", "Bandoneón"];
function recorrerArray(array) {
    let largoArray = array.length;
    for (let i = 0; i < largoArray; i++) {
        console.log(array[i]);
    }
}
recorrerArray(instrumentos);

/* Con el mismo ejemplo de arriba se usa una función con la propiedad unshift para agregar un instrumento musical (Armónica) al comienzo de la lista iterando el array */

instrumentos.unshift("Armónica");
console.log(instrumentos);

/* Con el mismo ejemplo se usa una función con la propiedad push para agregar un instrumento musical (Clarinete) al final de la lista iterando el array */

instrumentos.push("Clarinete");
console.log(instrumentos);


/* Con una lista de accesorios de instrumentos musicales, utilizo el método map para crear un array con todos los elementos del array original. (En este caso para que me devuelva todos los accesorios que tenemos en stock). */

const stockAccesorios = [
    { nombre: 'Palillos Bateria Vic Firth 5a Punta Madera', precio: 2500 },
    { nombre: 'Pua Stagg Guitarra Pack 10 unidades', precio: 400 },
    { nombre: 'Encordado Guitarra Criolla Medium Magma', precio: 900 },
    { nombre: 'Micrófono Vocal Shure SM58', precio: 30000 },
    { nombre: 'Micrófono Shure SM57', precio: 27000 },
    { nombre: 'Cencerro Jam Block LP Medium Pitch Red', precio: 13900 },
    { nombre: 'Cencerro Jam Block LP High Pitch Blue', precio: 12000 },
    { nombre: 'Soporte de Micrófono Samson Bt4 pie reforzado', precio: 9050 },
    { nombre: 'Cable XLR (cannon) Micrófono profesional 10 Metros', precio: 1900 },
]

const nombres = stockAccesorios.map((el) => el.nombre)
console.log(nombres)

/* Con la misma lista de accesorios de instrumentos musicales, utilizo el método map y un return para, por ejemplo en este caso, aumentar el precio de todos los accesorios que tenemos en stock un 20%. */

const actualizado = stockAccesorios.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.2
    }
})

console.log(actualizado)


/* Con una lista de artículos de librería, combino un array con objetos y producto usando un booleano, también utilizando for...of y sumando el IVA al precio del artículo*/

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const productos = [];
productos.push(new Producto("Lapicera", "120"));
productos.push(new Producto("Lápiz", "100"));
productos.push(new Producto("Goma", "70"));
productos.push(new Producto("Hojas", "500"));
for (const producto of productos)
    producto.sumarIva();
console.log(productos);
