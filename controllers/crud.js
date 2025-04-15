const conexion = require('../database/db');

// Función para guardar un registro
exports.save = (req, res) => {
  const { namess, surnames, date_nac, direction, marital_status, nationality, sex, isChildren } = req.body;
  conexion.query(
    'INSERT INTO person SET ?',
    { namess, surnames, date_nac, direction, marital_status, nationality, sex, isChildren },
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error al insertar registro');
      } else {
        res.redirect('/');
      }
    }
  );
};

// Función para renderizar el formulario de edición
exports.edit = (req, res) => {
  const id = req.params.id;
  conexion.query('SELECT * FROM person WHERE id = ?', [id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al obtener el registro');
    } else {
      res.render('edit', { person: results[0] });
    }
  });
};

// Función para actualizar el registro
exports.update = (req, res) => {
  const { id, namess, surnames, date_nac, direction, marital_status, nationality, sex, isChildren } = req.body;
  conexion.query(
    'UPDATE person SET ? WHERE id = ?',
    [{ namess, surnames, date_nac, direction, marital_status, nationality, sex, isChildren }, id],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el registro');
      } else {
        res.redirect('/');
      }
    }
  );
};

// Función para eliminar un registro
exports.delete = (req, res) => {
  const id = req.params.id;
  conexion.query('DELETE FROM person WHERE id = ?', [id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al eliminar el registro');
    } else {
      res.redirect('/');
    }
  });
};

