/**
 * Crea un script que muestre por consola cada uno de los archivos del directorio 'backup-files'.
 * 
 * REsultado esperado: https://oscarm.tinytake.com/msc/OTcyMDU5MV8yMzM1NjMzNA
 * 
 */

// Importar el módulo fs
const fs = require('fs');

// Nombre de la carpeta que deseas leer
const nombreCarpeta = './backup-files';

// Leer los archivos de la carpeta de forma asíncrona
fs.readdir(nombreCarpeta, (err, archivos) => {
  if (err) {
    console.error('Error al leer la carpeta:', err);
  } else {
    console.log( archivos);
  }
});
