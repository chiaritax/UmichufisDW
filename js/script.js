const name = prompt("¿Cómo te llamas?");

const greet = (name) => {
    alert(`Hola ${name}`);
}
greet(name);

const productsInCart = [];

const products = [
    {
        nombre: "Buzo Umichufis",
        precio: 2000,
        id: 1
    },
    {
        nombre: "Buzo Umichufis Limited Edition",
        precio: 2300,
        id: 2
    },
    {
        nombre: "Barbijo Umichufis",
        precio: 550,
        id: 3
    },
    {
        nombre: "Buzo Queen Umichufis",
        precio: 2900,
        id: 4
    },
    {
        nombre: "Taza Umichufis",
        precio: 900,
        id: 5
    },
    {
        nombre: "Libro Umichufis",
        precio: 1900,
        id: 6
    }
];

const totalPrice = () => {
    let total = 0;
    productsInCart.forEach(product => {
        total += product.precio;
    });
    return total;
}

const askForAnotherProduct = () => {
    const answer = prompt("¿Quieres agregar otro producto? Escriba 'Si' o 'No'");
    if (answer == "si" || answer == "Si" || answer == "SI") {
        askProduct();
    } else if (answer == "no" || answer == "No" || answer == "NO") {
        alert(`${name} Tu compra tiene un total de $${totalPrice()}`);
    } else {
        alert("Respuesta no válida");
        askForAnotherProduct();
    }
}

const askProduct = () => {
    const productId = prompt("¿Qué producto deseas agregar? Escriba el ID del producto \n 1 - Buzo Umichufis \n 2 - Buzo Umichufis Limited Edition \n 3 - Barbijo Umichufis \n 4 - Buzo Queen Umichufis \n 5 - Taza Umichufis \n 6 - Libro Umichufis");
    const product = products.find(product => product.id == productId);
    if (product) {
        productsInCart.push(product);
        alert(`${product.nombre} agregado al carrito`);
        askForAnotherProduct();
    } else {
        alert("Producto no encontrado");
        askProduct();
    }
}

askProduct();