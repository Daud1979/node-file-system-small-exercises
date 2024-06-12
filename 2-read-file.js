/**
 * Lee el fichero "test.txt" que acabas de crear y muestra su contenido por la consola
 */
// Importar el módulo fs
const fs = require('fs');

// Nombre del archivo que deseas leer
const nombreArchivo = 'test.txt';

try {
  // Leer el archivo de forma síncrona
  const data = fs.readFileSync(nombreArchivo, 'utf8');
  console.log('Contenido del archivo:', data);
} catch (err) {
  console.error('Error al leer el archivo:', err);
}