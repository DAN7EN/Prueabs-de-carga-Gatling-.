package scala.scenarios

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.requests.requestPerros

object scenarioPerros {
  val scenarioTodosPerros = scenario("S_ObtenerListadoPerros").exec(requestPerros.requestTodosPerros)
  //println("Respuesta del scenario: "+ scenarioTodosPerros +"\n")
}
