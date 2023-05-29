package scala.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.config.variables
import scala.io.Source

/*
* En esta simulación los datos estan en un archivo .csv y de ahi se toman los valores del body
* */
class AutocompleteSiigoV3 extends Simulation{

  val variables = new variables()
  val rutaToken= "./src/test/scala/config/token.txt"
  val feederCSV = csv("src/test/scala/config/feederAutocomplete.csv").random

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
  //Se le pasa por parametro el valor de la variable de la clase variables
  val protocoloHttp = http.baseUrl(variables.apiSiigo)
  val scnAutoComplete = scenario("Buscador de Siigo")
    //Cargamos el feeder en el escenario
    .feed(feederCSV)
    //Nombre del request
    .exec(http("Buscador de Siigo")
      //EndPoint
      .post(variables.endPGetDataAutoComplete)
      //El mapa con los header de la petición
      .headers(headersMap)
      //Este json es una plantilla en donde los valores de cada campo lo toma del .csv llamado feederAutocomplete.csv
      .body(StringBody("""{"type": "${type}", "browserID": "${browserID}", "query": "${query}", "filter":"${filter}", "tags": {}}""")).asJson
      //Verificamos que la peticion sea exitosa
      .check(status.is(200)))
    .pause(5)
  setUp(
    scnAutoComplete
      .inject(atOnceUsers(100))
  )
    .protocols(protocoloHttp)
}