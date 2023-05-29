package scala.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.scenarios.scenarioPerros

class simulationPerros extends Simulation{
  val apiBase = "https://dog.ceo"
  val usuarios = 10

  val httpProtocol = http.baseUrl(apiBase).acceptHeader("*/*")
  //println("Respuesta de la simulation: "+ httpProtocol +"\n")

  setUp(scenarioPerros.scenarioTodosPerros
    .inject(rampUsersPerSec(50.0).to(200.0).during(20)))
    .protocols(httpProtocol)
}
