// Cargue la conexion del grupo MySQL
const { response, request } = require("express");
const pool = require("../data/config");

//Ruta de la app
const router = (app) => {
  //Mostrar mensaje de bienvenida de root
  app.get("/", (request, response) => {
    response.send({
      message: "Bienvendio a Node.js Express REST API!",
    });
  });

  //Mostrar todos los usuarios
  app.get("/users", (request, response) => {
    pool.query("SELECT * FROM users", (error, result) => {
      if (error) throw error;

      response.send(result);
    });
  });

// Mostrar un solo usuario por ID

app.get('/users/:id', (request, response) => {
  const id = request.params.id;

  pool.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
    if (error) throw error;
    response.send(result);
  });
});

//Agregar un nuevo usuario
app.post('/users', (request, response) => {
  post.query('INSERT INTO users SET ?', request.body, (error, result) => {
    if (error) throw error;

    response.status(201).send('User added with ID: ${result.insertId}' );
  });
});

// Actualizar un usuario existente
app.put('/users/:id', (request, response) => {
  const id = request.params.id;

  post.query('UPDATE users SET ? WHERE id = ?', (request.body, id), (error,result) => {
  response.send('User update successfully');
});
});


//Eliminar un usuario 
app.delete('/users/:id', (request, response) => {
  const id = request.params.Id;

  pool.query('DELETE FROM users WHERE id = ?', Id, (error, result) => {
    if (error) throw error;
    response.send('User deleted.');

  });
});


};
module.exports = router;