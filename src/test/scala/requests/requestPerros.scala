package scala.requests

import io.gatling.core.Predef._
import io.gatling.http.Predef._


object requestPerros {
  val requestTodosPerros = http("R_ObtenerListadoPerros").get("/api/breeds/list/all").check(status.is(200))
}
