function saludar(nombre, edad, genero, idioma) {
  var fechaActual = new Date();
  var hora = fechaActual.getHours();
  var resultado = "";

  if (idioma === "es") {
    if (hora > 12 && hora < 19) {
      resultado = "Buenas tardes ";
    } else if (hora < 12) {
      resultado = "Buenos días ";
    } else {
      resultado = "Buenas noches ";
    }

    if (edad > 30 && genero === "masculino") {
      resultado += "Sr " + nombre;
    } else if (edad > 30 && genero === "femenino") {
      resultado += "Sra " + nombre;
    } else {
      resultado += nombre;
    }
  } else if (idioma === "en") {
    if (hora > 12 && hora < 19) {
      resultado = "Good afternoon ";
    } else if (hora < 12) {
      resultado = "Good morning ";
    } else {
      resultado = "Good evening ";
    }

    if (edad > 30 && genero === "masculino") {
      resultado += "Mr " + nombre;
    } else if (edad > 30 && genero === "femenino") {
      resultado += "Mrs " + nombre;
    } else {
      resultado += nombre;
    }
  }

  return resultado;
}

export default saludar;
