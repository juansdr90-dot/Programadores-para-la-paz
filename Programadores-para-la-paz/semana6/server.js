// 1. Importar Express
const express = require('express');
const app = express();

// 2. Middleware crucial (Para que el servidor entienda datos JSON)
app.use(express.json());

// ==========================================
// RUTA 1: Registro de mensajes comunitarios
// ==========================================
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// ==========================================
// RUTA 2: Reporte comunitario de incidencias
// ==========================================
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

// 3. Configurar el puerto 3000 para escuchar las peticiones
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});