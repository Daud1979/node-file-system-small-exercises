/**
 * Escribe un fichero de nombre "test.txt" con el texto "Hello World!".
 * 
 */
const fs = require('fs');
fs.writeFile("./test.txt","Hello World!", (err) => {
    if (err) {
      console.error('Error al crear el archivo:', err);
    } else {
      console.log('Archivo creado y contenido escrito con éxito');
    }
  });