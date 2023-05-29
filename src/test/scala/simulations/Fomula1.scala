package scala.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.config.variables
import scala.xml.XML

class Fomula1 extends Simulation{
  val variables = new variables()//Instancio un objeto de la clase variables
  val protocoloHttp = http.baseUrl(variables.apiFormula1)//Se le pasa por parametro el valor de la variable de la clase variables
  val scnNextRace = scenario("Proxima carrera F1")
    .exec(http("Proxima carrera F1")
      .get(variables.endPNextRace)
      .check(status.is(200)))//Enpoint que obtiene la proxima carrera de F1
    .pause(5)
  val scnAllSeason = scenario("Todas las temporadas")
    .exec(http("Todas las temporadas")
      .get(variables.seasons)
      .check(status.is(200)))//Enpoint que obtiene todas las temporadas de F1
    .pause(5)
  val scnPerezWins2023 = scenario("Victorias Checo 2023")
    .exec(http("Victorias Checo 2023")
      .get(variables.perezRacesWins)
      .check(status.is(200))
      .check(bodyString.saveAs("responseBody"))) // Guarda la respuesta en una variable
    .exec(session => {
      val responseBody = session("responseBody").as[String] // Obtiene el valor de la variable de respuesta
      val xml = XML.loadString(responseBody) // Parsea el contenido de la respuesta como XML
      // Accede al nodo Result y obtiene el valor del parametro position cuantas veces aparezca el nodo
      val posiciones = (xml \\ "Result").map(_.attribute("position").map(_.text)).flatten // Se guarda el valor de parametro en todos los nodos Result
      posiciones.foreach(position => println(s"Posición de Checo en carrera: $position"))
      session
    })
    .pause(5)
  setUp(
    scnNextRace.inject(atOnceUsers(1)),
    scnAllSeason.inject(rampUsers(1).during(1)),
    scnPerezWins2023.inject(constantUsersPerSec(1).during(1))
  )
    .protocols(protocoloHttp)
}