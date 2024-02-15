function saludar(nombre, edad, genero) {
  if(edad > 30 && genero === "masculino")
  {
    return "Sr " + nombre;
  }
  else if(edad > 30 && genero === "femenino")
  {
    return "Sra " + nombre;
  }
  else
    return nombre;
}

export default saludar;
