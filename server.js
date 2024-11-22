const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Middleware para manejar JSON
app.use(express.json());

// Datos iniciales (esto lo vamos a almacenar en memoria por ahora)
let items = [];

// Ruta para obtener todos los elementos
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Ruta para obtener un elemento por ID
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).send('Elemento no encontrado');
    }
    res.json(item);
});

// Ruta para agregar un nuevo elemento
app.post('/api/items', (req, res) => {
    const newItem = req.body;
    newItem.id = items.length + 1;  // Asigna un ID único
    items.push(newItem);
    res.status(201).json(newItem);
});

// Ruta para actualizar un elemento
app.put('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
        return res.status(404).send('Elemento no encontrado');
    }
    Object.assign(item, req.body);  // Actualiza el objeto con los nuevos datos
    res.json(item);
});

// Ruta para eliminar un elemento
app.delete('/api/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).send('Elemento no encontrado');
    }
    items.splice(index, 1);  // Elimina el elemento del array
    res.status(204).send();
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
