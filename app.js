const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8080;


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });



  
// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Ruta para obtener todos los productos con un límite opcional
app.get('/products', (req, res) => {
    const  {limit}  = req.query;
    let products = JSON.parse(fs.readFileSync('Productos.json', 'utf8'));
  
    if (limit) {
      products = products.slice(2, parseInt(limit));
    }
  
    res.json(products);
  });


  // Ruta para obtener un producto por su ID
app.get('/products/:pid', (req, res) => {
    const {pid}  = req.params;
    const products = JSON.parse(fs.readFileSync('Productos.json', 'utf8'));
    const product  = products.find(p => p.id === parseInt(pid));
  
    if (!products) {
      res.status(404).json({ error: 'Producto no encontrado' });
      return;
    }
  
    res.json(product);
  });