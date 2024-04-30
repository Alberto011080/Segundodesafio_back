const ProductManager = require('./productManager.js')

const manager = new ProductManager()

manager.addProduct({
    title: "OU812",
    description: "Van Halen",
    price: 9,
    thumbnail: "./71BhISzzSRL._SL1448_.jpg" ,
    stock: 25,
    code: "A02",
    id: 1,

})

manager.getProduct()
.then(productos => console.log('productos', productos))
.catch(error => console.error("Erro al consultar productos", error))