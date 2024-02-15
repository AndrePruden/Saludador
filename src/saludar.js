function saludar(nombre, edad, genero) {

  var fechaActual = new Date();
  var hora = fechaActual.getHours();
  console.log(hora);
  resultado = "";

  if(hora > 12 && hora < 19)
  {
    resultado = "Buenas tardes ";
  }
  else if(hora < 12)
  {
    resultado = "Buenas dias ";
  }
  else
    resultado = "Buenas noches ";

  if(edad > 30 && genero === "masculino")
  {
    resultado += "Sr " + nombre;
  }
  else if(edad > 30 && genero === "femenino")
  {
    resultado += "Sra " + nombre;
  }
  else
    resultado += nombre;
  return resultado
}


export default saludar;
