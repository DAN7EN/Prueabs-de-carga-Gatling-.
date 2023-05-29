package scala.simulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ObtenerZorrosV2 extends Simulation{

  before{
    println("Inicio de la simulación")
  }

  //Api sencilla que devuelve la imagen aleatoria de un zorro
  val protocoloHttp = http.baseUrl("https://randomfox.ca/").acceptHeader("*/*")//Url base de la API sin ningún Endpoint

  //Poblacion de usuarios dependiendo los Perfiles en la plataforma a usar
  val usuarioEstandar = scenario("Usuario Estandar")
    .exec(http("PeticionZorros")
      .get("/floof/"))
    .pause(5) //"/floof/" es el Endpoint

  //Ejecución de los escenarios, se puede ejecutar todos a la vez
  setUp(usuarioEstandar.inject(
    constantUsersPerSec(10).during(1.minute)//inyectamos 10 usuarios x segundo durante 1 minuto, es decir 600 usuarios
  ).throttle(//Este metodo se usa para limitar la velociad de la prueba
            reachRps(15).in(13),//Aqui se establece que se debe alcanzar una velocidad maxima de 15 solicitudes x seg en 13 segundos
            holdFor(1.minute),//Aqui se establece que se mantendrá la velocidad maxima de 15 solicitudes x seg durante 1 minuto
            jumpToRps(5),//Aqui se establece que la velocidad de las solicitudes debes disminuir bruscamente a 5 solicitudes x seg
            holdFor(2.minutes)//Aqui se indica que se mantendra la velocidad de 5 solicitudes x seg durante 2 minutos
  ))
    .protocols(protocoloHttp)
  after{
    println("Fin de la simulación")
  }
}
