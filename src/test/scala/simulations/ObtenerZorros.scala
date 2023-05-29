package scala.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class ObtenerZorros extends Simulation{

  //Api sencilla que devuelve la imagen aleatoria de un zorro
  val protocoloHttp = http.baseUrl("https://randomfox.ca/").acceptHeader("*/*")//Url base de la API sin ningún Endpoint

  //Poblacion de usuarios dependiendo los Perfiles en la plataforma a usar
  val usuarioEstandar = scenario("Usuario Estandar")
    .exec(http("PeticionZorros")
      .get("/floof/"))
    .pause(5) //"/floof/" es el Endpoint
  val usuarioAdmin = scenario("Usuario Admin")
    .exec(http("PeticionZorros")
      .get("/floof/")).pause(3) //"/floof/" es el Endpoint
  val usuarioAvanzado = scenario("Usuario Avanzado")
    .exec(http("PeticionZorros")
      .get("/floof/"))
    .pause(2) //"/floof/" es el Endpoint

  //Ejecución de los escenarios, se puede ejecutar todos a la vez
  setUp(
        usuarioEstandar.inject(atOnceUsers(10)),
        usuarioAdmin.inject(nothingFor(5)),
        usuarioAvanzado.inject(rampUsers(20).during(10))
  )
    .protocols(protocoloHttp).assertions(global.allRequests.count.is(30))
}
