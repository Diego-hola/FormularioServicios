
// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');

/* Se exporta la función sobre https llamada "reco". */
exports.rec = functions.https.onRequest(
  /** Código para la función saludo.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
        
      // verifica que el parámetro nombre1 recibido del navegador esté correcto.
      
        // Entra aquí si el nombre1 es null, undefined o ""
        throw new Error("Falta seleccionar la bebida ");
        if (!request.query.edad) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta colocar la edad");
      }
      /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
       * Devuelve un saludo. */

      if (request.query.bebidas == "1" && request.query.edad >= 5 && request.query.edad < 60) {
        response.send("Te recomiendo Coca cola o Red cola");
      } 

      else if (request.query.bebidas == "2"){
        if(request.query.edad >= 18){
          response.send("Te recomiendo cerveza, vodka, tequila, ron, whisky, pulque");
        }
        else{
          response.send("No te puedo recomendar este tipo por ser menor de edad");
        }
          } 

      else if (request.query.bebidas == "3" && request.query.edad >= 6 && request.query.edad < 70) {
        response.send("Te recomiendo agua de frutas como , piña o tamarindo ");
        
          } 
      else if (request.query.bebidas == "4" && request.query.edad >= 6 && request.query.edad < 70) {
        response.send("Te recomiendo Una rica Cocacola");

        }
        else if (request.query.bebidas == "4" && request.query.edad >= 6 && request.query.edad <= 15) {
          response.send("Te recomiendo una bebida mas tranquila como un sidral munden");

      }

      
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
  });