package scala.config
import java.io.PrintWriter

class variables {
  //Api y endpoints de Formula 1
  val apiFormula1 = "http://ergast.com/api/f1"
  //Endpoints
  val endPNextRace = "/current/next"
  val seasons = "/seasons"
  val perezRacesWins = "/2023/drivers/perez/results"

  //Api ServicesQA Siigo, endpoints y credenciales
  val apiSiigo = "https://servicesqa.siigo.com"
  //Endpoints
  val endPGetToken = "/auth/connect/token?"//para generar un token de siigo por medio de una peticion post
  val endPGetDataAutoComplete = "/catalog/api/v1/Autocomplete/GetData"//Para buscar en la pagina de siigo

  //Variables para inicio de sesion
  val username = "QAArquitecturaNuevoSiigoNube_Pao001@yotmail.com"
  val password = "1119"
  val grant_type = "password"

  //Variable para almacenar el token de Siigo
  var siigoToken: Option[String] = None

  //Metodo para establecer el valor del token de siigo
  def setSiigoToken(token: String): Unit ={
    siigoToken = Some(token)
  }

  //Metodo que guarda un token en un archivo .txt llamado token en el proyecto
  def guardarTokenEnArchivo(token: String, rutaArchivo: String): Unit = {
    val archivo = new PrintWriter(rutaArchivo) //Se crea una instanca de PrintWriter para poder escribir en el txt
    archivo.println(token) //Aqui escribimos en una linea nueva en el txt
    archivo.close() //Se cierra el archivo
  }
}
