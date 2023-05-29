package scala.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.config.variables

/*
* En esta simulacion se obtiene el token de siigo y se almacena en el archivo token.txt ubicado dentro del proyecto
* */

class GenerarTokenSiigoV2 extends Simulation{
  //Instancio un objeto de la clase variables
  val variables = new variables()

  //Creamos un mapa para pasarle los datos del header
  val headersMap = Map(
    "Accept" -> "application/json",
    "content-Type" -> "application/x-www-form-urlencoded",
    "Authorization" -> "Basic U2lpZ29XZWI6QUJBMDhCNkEtQjU2Qy00MEE1LTkwQ0YtN0MxRTU0ODkxQjYx"
  )
  val protocoloHttp = http.baseUrl(variables.apiSiigo)//Se le pasa por parametro el valor de la variable de la clase variables
  val scnObtenerToken = scenario("Obtener token siigo")
    .exec(http("Obtener token siigo")
      .post(variables.endPGetToken)//Endpoint
      .headers(headersMap)//Los headers
      //El metodo formParam es para tomar los datos del boby como x-www-from-urlencode
      .formParam("grant_type", variables.grant_type)
      .formParam("username", variables.username)
      .formParam("password", variables.password)
      .check(status.is(200))//Verificamos que sea exitosa la peticion
    .check(jsonPath("$.access_token").saveAs("accessToken")))//Guardamos la respuesta en una variable llamadda accessToken
    .exec(session=>{
      val accessToken = session("accessToken").as[String]
      variables.guardarTokenEnArchivo(accessToken, "./src/test/scala/config/token.txt")//Se guarda el token en un archivo .txt llamado token en la ruta especificada dentro del proyecto
      session
    })
    .pause(5)
  setUp(
    scnObtenerToken.inject(atOnceUsers(1))).protocols(protocoloHttp)
}