package scala.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.config.variables

/*
* En esta simulacion se obtiene el token de Siigo y se almacena en la funcion setSiigoToken
* la cual se encuentra en la clase variables.scala
*
* */
class GenerarTokenSiigo extends Simulation{

  val headersMap = Map(
    "Accept" -> "application/json",
    "content-Type" -> "application/x-www-form-urlencoded",
    "Authorization" -> "Basic U2lpZ29XZWI6QUJBMDhCNkEtQjU2Qy00MEE1LTkwQ0YtN0MxRTU0ODkxQjYx"
  )
  val variables = new variables()//Instancio un objeto de la clase variables
  val protocoloHttp = http.baseUrl(variables.apiSiigo)//Se le pasa por parametro el valor de la variable de la clase variables
  val scnObtenerToken = scenario("Obtener token siigo")
    .exec(http("Obtener token siigo")
      .post(variables.endPGetToken)
      .headers(headersMap)
      //El metodo formParam es para tomar los datos del boby como x-www-from-urlencode
      .formParam("grant_type", variables.grant_type)
      .formParam("username", variables.username)
      .formParam("password", variables.password)
      .check(status.is(200))//Verificamos que sea exitosa la peticion
    .check(jsonPath("$.access_token").saveAs("accessToken")))//Guardamos la respuesta en una variable llamadda access_token
    .exec(session=>{
      val accessToken = session("accessToken").as[String]
      variables.setSiigoToken(accessToken)//Aqui se guarda el valor del token en el metodo setSiigoToken de la clase variables
      session
    })//Enpoint que obtiene token de Siigo
    .pause(5)
  setUp(
    scnObtenerToken.inject(atOnceUsers(1))).protocols(protocoloHttp)
}