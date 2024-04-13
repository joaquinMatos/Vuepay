const express = require('express');
const sql = require('mssql');
const cors = require('cors'); // Importa el paquete cors

// Configuración de la conexión a la base de datos
const dbConfig = {
  server: "JOAQUIN\\SQLEXPRESS",
  database: "vuepay",
  user: "sa",
  password: "1234",
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

// Crear una instancia de Express
const app = express();

// Middleware para permitir el análisis de JSON en las solicitudes
app.use(express.json());

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Endpoint para obtener datos de la base de datos
app.get('/api/user', async (req, res) => {
  try {
    // Crear una conexión a la base de datos
    const pool = await sql.connect(dbConfig);
    // Consulta SQL para obtener datos
    const result = await pool.request().query('SELECT * FROM usuario');
    // Enviar los datos obtenidos como respuesta
    res.json(result.recordset);
  } catch (error) {
    console.error('Error al obtener datos:', error);
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/api/tpagos', async (req, res) => {
  try {
    // Crear una conexión a la base de datos
    const pool = await sql.connect(dbConfig);
    // Consulta SQL para obtener datos
    const result = await pool.request().query('SELECT * FROM tablapagos');
    // Enviar los datos obtenidos como respuesta
    res.json(result.recordset);
  } catch (error) {
    console.error('Error al obtener datos:', error);
    res.status(500).send('Error al obtener datos');
  }
});

app.post('/api/insertdata/', async (req, res) => {
  try {
    const { name, apellido, email, password } = req.body;
    const folio = "3YB9K7X2L";
    if (!folio || !name || !apellido || !email || !password) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }
    // Crear una conexión a la base de datos
    const pool = await sql.connect(dbConfig);
    // Consulta SQL para insertar datos
    const query = `
      INSERT INTO usuario VALUES ('${folio}','${name}', '${apellido}', '${email}', '${password}')
    `;
    // Ejecutar la consulta
    await pool.request().query(query);
    res.status(201).json({ message: "Datos insertados correctamente" });
  } catch (error) {
    console.error('Error al insertar datos:', error);
    res.status(500).send('Error al insertar datos');
  }
});


// Iniciar el servidor en el puerto especificado
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
