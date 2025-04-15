const express = require('express');
const router = express.Router();
const conexion = require('./database/db');
const crud = require('./controllers/crud');

// Listar registros
router.get('/', (req, res) => {
  conexion.query('SELECT * FROM person', (error, results) => {
    if (error) throw error;
    res.render('index', { registros: results });
  });
});

// Mostrar formulario de creación
router.get('/create', (req, res) => {
  res.render('create');
});

// Guardar nuevo registro
router.post('/save', crud.save);

// Mostrar formulario de edición
router.get('/edit/:id', crud.edit);

// Actualizar registro
router.post('/update', crud.update);

// Ruta para eliminar (si la implementas)
router.get('/delete/:id', crud.delete);

module.exports = router;
