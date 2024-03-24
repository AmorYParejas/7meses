document.addEventListener("DOMContentLoaded", function() {
    // Fecha a la que se va a contar regresivamente (año, mes (base 0), día, hora, minuto, segundo)
    var fechaFinal = new Date('2024-12-31T23:59:59');
  
    function actualizarContador() {
      var ahora = new Date();
      var diferencia = fechaFinal - ahora;
  
      var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
      // Actualizar el contenido de los elementos HTML con los valores calculados
      document.getElementById("dias").textContent = dias < 10 ? '0' + dias : dias;
      document.getElementById("horas").textContent = horas < 10 ? '0' + horas : horas;
      document.getElementById("minutos").textContent = minutos < 10 ? '0' + minutos : minutos;
      document.getElementById("segundos").textContent = segundos < 10 ? '0' + segundos : segundos;
  
      // Si la fecha final ha pasado, detener el contador
      if (diferencia < 0) {
        clearInterval(intervalo);
        document.getElementById("contador").innerHTML = "<h2>¡El contador ha terminado!</h2>";
      }
    }
  
    // Llamar a la función para que inicie el contador
    actualizarContador();
  
    // Actualizar el contador cada segundo
    var intervalo = setInterval(actualizarContador, 1000);
  });
  