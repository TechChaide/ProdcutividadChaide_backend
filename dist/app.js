"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var sequelize = require("./config/database");
var db = require("./models");
var app = express();
var corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

// Route imports
var areaProcessControlRoutes = require("./routes/area_process_control.routes");
var estacionRoutes = require('./routes/estacion.routes');
var lineaRoutes = require('./routes/linea.routes');
var departamentoRoutes = require('./routes/departamento.routes');
var lineaDepartamentoRoutes = require('./routes/linea_departamento.routes');
var logCambioPlasticosRoutes = require('./routes/log_cambio_plasticos.routes');
var logOrdenesRoutes = require("./routes/log_ordenes.routes");
var logReimpresionesRoutes = require('./routes/log_reimpresiones.routes');
var ORDENEmpleadoRoutes = require("./routes/ORDEN_EMPLEADO.routes");
var ORDENEmpleadoDecimalRoutes = require("./routes/ORDEN_EMPLEADO_DECIMAL.routes");
var ORDENEmpleadoPNCRoutes = require("./routes/ORDEN_EMPLEADO_PNC.routes");
var serviciosRoutes = require("./routes/servicios.routes");
var sesionRoutes = require('./routes/sesion.routes');
var authRoutes = require("./routes/auth.routes");
var serviciosDashboardRoutes = require("./routes/servicios_dashboard.routes");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors(corsOptions));

///IPs usuarios
app.set('trust proxy', true);

// Mount routes
app.use("/api/area-process-controls", areaProcessControlRoutes);
app.use('/api/estacions', estacionRoutes);
app.use('/api/lineas', lineaRoutes);
app.use('/api/departamentos', departamentoRoutes);
app.use('/api/linea-departamentos', lineaDepartamentoRoutes);
app.use('/api/log-cambio-plasticos', logCambioPlasticosRoutes);
app.use("/api/log-ordenes", logOrdenesRoutes);
app.use('/api/log-reimpresiones', logReimpresionesRoutes);
app.use("/api/ORDEN-EMPLEADOs", ORDENEmpleadoRoutes);
app.use("/api/ORDEN-EMPLEADO-DECIMALs", ORDENEmpleadoDecimalRoutes);
app.use("/api/ORDEN-EMPLEADO-PNCs", ORDENEmpleadoPNCRoutes);
app.use("/api/servicios", serviciosRoutes);
app.use('/api/sesions', sesionRoutes);
app.use("/api/auths", authRoutes);
app.use("/api/dsh-Servicios", serviciosDashboardRoutes);

// Error handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined
  });
});

// Database connection and server startup
db.sequelize.authenticate().then(function () {
  console.log("Conexión a la base de datos principal (db1) establecida correctamente.");
})["catch"](function (err) {
  console.error("No se puede conectar a la base de datos principal (db1):", err);
});

// Opcional: También puedes probar la segunda conexión
db.sequelize2.authenticate().then(function () {
  console.log("Conexión a la segunda base de datos (db2) establecida correctamente.");
})["catch"](function (err) {
  console.error("No se puede conectar a la segunda base de datos (db2):", err);
});
module.exports = app;