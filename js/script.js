const clients = [];
const productsInCart = [];

class Client {
    constructor(name, lastName, age, email) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}

const newClient = () => {
    alert(`Hola vamos a crear tu perfil!`);
    let client = new Client(prompt(`Ingresa tu nombre:`), prompt(`Ingresa tu apellido:`), prompt(`Ingresa tu edad:`), prompt(`Ingresa tu email:`));
    clients.push(client);
    alert(`Bienvenido ${client.name} ${client.lastName}`);
    console.table(clients);
    askProduct();
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}


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
        askForNewProduct();
    } else {
        alert("Respuesta no válida");
        askForAnotherProduct();
    }
}

const askForNewProduct = () => {
    const answer = prompt("¿Quieres crear otro producto? Escriba 'Si' o 'No'");
    if (answer == "si" || answer == "Si" || answer == "SI") {
        let newProduct = new Product(prompt("Nombre del producto"), Number(prompt("Precio del producto")));
        alert(`${newProduct.name} fue agregado a la lista de productos con un precio de $${newProduct.price}`);
        products.push(newProduct);
        askForNewProduct();
    } else if (answer == "no" || answer == "No" || answer == "NO") {
        alert(`${clients[0].name} que tengas un buen día! :)`);
    } else {
        alert("Respuesta no válida");
        askForNewProduct();
    }
}

const orderProducts = () => {
    let orderedProducts = products.sort((a, b) => (a.precio > b.precio ? 1 : -1));
    console.table(orderedProducts)
}
orderProducts();

const askProduct = () => {
    const productId = prompt(`¿Qué producto deseas agregar? Escriba el ID del producto \n 1 - ${products[0].nombre} \n 2 - ${products[1].nombre} \n 3 - ${products[2].nombre} \n 4 - ${products[3].nombre} \n 5 - ${products[4].nombre} \n 6 - ${products[5].nombre}`);
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
newClient();