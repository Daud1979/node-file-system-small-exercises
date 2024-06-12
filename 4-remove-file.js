/**
 * Borra el fichero 'borrame.txt' situado en este mismo directorio
 */
const fs = require('fs');
try {
    // Eliminar el archivo de forma síncrona
    fs.unlinkSync('./borrame.txt');
    console.log(`Archivo eliminado con éxito`);
  } catch (err) {
    console.error('Error al eliminar el archivo:', err);
  }