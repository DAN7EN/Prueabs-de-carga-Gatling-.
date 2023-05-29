package scala.simulations

  import io.gatling.core.Predef._
  import io.gatling.http.Predef._

class ObtenerPerros extends Simulation{
  //Api que devuelve aleatoriamente la imagen de un perro
  val httpProtocol = http
    .baseUrl("https://dog.ceo/api/")
    .acceptHeader("*/*")

  val escenario = scenario("Obtene todos los perros")
    .exec(http("Obtener_Todos_Los_Perros")
      .get("breeds/list/all")//Endpoint que devuelve todos los perros
      .check(status.is(200)))

  setUp(escenario
    .inject(atOnceUsers(2)))
    .protocols(httpProtocol)
}