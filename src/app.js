const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const db = require("./models");

const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};


// Route imports
const areaProcessControlRoutes = require("./routes/area_process_control.routes");
const estacionRoutes = require('./routes/estacion.routes');
const lineaRoutes = require('./routes/linea.routes');
const departamentoRoutes = require('./routes/departamento.routes');
const lineaDepartamentoRoutes = require('./routes/linea_departamento.routes');
const logOrdenesRoutes = require("./routes/log_ordenes.routes");
const logReimpresionesRoutes = require('./routes/log_reimpresiones.routes');
const ORDENEmpleadoRoutes = require("./routes/ORDEN_EMPLEADO.routes");
const ORDENEmpleadoDecimalRoutes = require("./routes/ORDEN_EMPLEADO_DECIMAL.routes");
const ORDENEmpleadoPNCRoutes = require("./routes/ORDEN_EMPLEADO_PNC.routes");
const serviciosRoutes = require("./routes/servicios.routes");
const sesionRoutes = require('./routes/sesion.routes');
const authRoutes = require("./routes/auth.routes");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

///IPs usuarios
app.set('trust proxy', true);

// Mount routes
app.use("/api/area-process-controls", areaProcessControlRoutes);
app.use('/api/estacions', estacionRoutes);
app.use('/api/lineas', lineaRoutes);
app.use('/api/departamentos', departamentoRoutes);
app.use('/api/linea-departamentos', lineaDepartamentoRoutes);
app.use("/api/log-ordenes", logOrdenesRoutes);
app.use('/api/log-reimpresiones', logReimpresionesRoutes);
app.use("/api/ORDEN-EMPLEADOs", ORDENEmpleadoRoutes);
app.use("/api/ORDEN-EMPLEADO-DECIMALs", ORDENEmpleadoDecimalRoutes);
app.use("/api/ORDEN-EMPLEADO-PNCs", ORDENEmpleadoPNCRoutes);
app.use("/api/servicios", serviciosRoutes);
app.use('/api/sesions', sesionRoutes);
app.use("/api/auths", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// Database connection and server startup
db.sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Conexión a la base de datos principal (db1) establecida correctamente."
    );
  })
  .catch((err) => {
    console.error(
      "No se puede conectar a la base de datos principal (db1):",
      err
    );
  });

// Opcional: También puedes probar la segunda conexión
db.sequelize2
  .authenticate()
  .then(() => {
    console.log(
      "Conexión a la segunda base de datos (db2) establecida correctamente."
    );
  })
  .catch((err) => {
    console.error(
      "No se puede conectar a la segunda base de datos (db2):",
      err
    );
  });

module.exports = app;
