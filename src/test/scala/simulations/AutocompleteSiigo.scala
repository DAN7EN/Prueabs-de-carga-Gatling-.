package scala.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.io.Source
import scala.config.variables

/*
* En esta simulacion los datos del body estan quemados
* */

class AutocompleteSiigo extends Simulation{
  //Instancio un objeto de la clase variables
  val variables = new variables()
  //Ruta donde se encuentra almacenado del token generado con la simulacion GetTokenSiigoV2
  val rutaToken= "./src/test/scala/config/token.txt"

//Metodo para leer el token guardado en el archivo .txt llamado token, el cual se genera en la simulacion GetTokenSiigoV2
  def leerTokenDesdeArchivo(filePath: String): Option[String] = {
    val archivo = Source.fromFile(filePath)
    val lineas = archivo.getLines().toList
    archivo.close()
    lineas.headOption
  }
  // Leemos el token guardado previamente y lo guardamos en la variable token
  val tokenGuardado: Option[String] = leerTokenDesdeArchivo(rutaToken)
  //Creamos un mapa con los header, en este el token
  val headersMap = Map(
    "Authorization" -> tokenGuardado.getOrElse(""),
    "Accept"-> "*/*",
    "Content-Type"-> "application/json"
  )
  println("Token: "+ tokenGuardado.getOrElse(""))
  val protocoloHttp = http.baseUrl(variables.apiSiigo)//Se le pasa por parametro el valor de la variable de la clase variables
  val scnAutoComplete = scenario("Buscador de Siigo")
    .exec(http("Buscador de Siigo")
      .post(variables.endPGetDataAutoComplete)//Enpoint
      .headers(headersMap)//los Headers
      //Datos del body en formato json
      .body(StringBody("""{"type": 1,"browserID": "1","query": "hola","filter":"","tags": {}}""")).asJson//Body de la peticion
      .check(status.is(200)))//Verificamos que sea exitosa la peticion
    .pause(5)
  setUp(
    scnAutoComplete
      .inject(atOnceUsers(100))
  )
    .protocols(protocoloHttp)
}