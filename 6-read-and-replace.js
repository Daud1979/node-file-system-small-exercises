/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html" .
 * 
 * Resultado esperado tras la primera llamada a la función: https://oscarm.tinytake.com/msc/OTcyMDYyOV8yMzM1NjM3Mg
 * 
 * @param {string} htmlFilePath Ruta al fichero a modificar
 * @param {string} textToSearch Texto a buscar
 * @param {string} textToReplace Texto a reemplazar     
 */
const fs =require('fs');
const path = require('path');
function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {
    const nombreArchivo = path.join(__dirname, 'index.html');

    try {
      // Leer el contenido del archivo de forma síncrona
      const data = fs.readFileSync(nombreArchivo, 'utf8');
    
      // Realizar el reemplazo en la cadena
      const cadenaOriginal = textToSearch;
      const cadenaNueva = textToReplace;
      const contenidoModificado = data.replace(new RegExp(cadenaOriginal, 'g'), cadenaNueva);
    
      // Escribir el contenido modificado de nuevo en el archivo de forma síncrona
      fs.writeFile("./result.html",contenidoModificado, (err) => {
        if (err) {
          console.error('Error al crear el archivo:', err);
        } else {
          console.log('Archivo creado y contenido escrito con éxito');
        }
      });
    } catch (err) {
      console.error('Error:', err);
    }
}

replaceTextInFile("./index.html", "FFC371", "ADD8E6");
//replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
//replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");
// Importar el módulo fs



// Nombre del archivo que deseas modificar

