console.log(">>>>> Iniciando electron...")

const { createWindow } = require("./main");
const { app } = require("electron");

console.log(">>>>>  Comprobando conexion de BD MySql")
require('./database');

console.log(">>>>> Llamando funcion -> createWindow() ")
app.allowRendererProcessReuse = false;
app.whenReady().then(createWindow);

