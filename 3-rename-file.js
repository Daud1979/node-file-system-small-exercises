/**
 * Renombra el fichero "bird.jpg" a "pajaro.jpg"
 */
// Importar el módulo fs
const fs = require('fs');

try {
    // Renombrar el archivo de forma síncrona
    fs.renameSync("./bird.jpg","./pajaro.jpg");
    console.log(`Archivo renombrado de `);
  } catch (err) {
    console.error('Error al renombrar el archivo:', err);
  }