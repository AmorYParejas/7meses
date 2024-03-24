function obtenerFecha() {
    // Obtenemos el input de fecha
    var inputFecha = document.getElementById("fecha");
  
    // Obtenemos el valor del input de fecha
    var fechaSeleccionada = inputFecha.value;

    // Fecha que deseas validar (formato YYYY-MM-DD)
    var fechaDeseada = '2023-08-24'; // Cambia esta fecha por la que desees
  
    // Verificamos si se ha seleccionado una fecha
    if (fechaSeleccionada) {
      // Mostramos la fecha seleccionada en la consola (puedes hacer lo que desees con la fecha)
      if (fechaSeleccionada === fechaDeseada) {
        // Ruta relativa al archivo HTML al que deseas redirigir
        var ruta = "home.html";
        
        // Redirigir a la ruta especificada
        window.location.href = ruta;
      } else {
        alert("Esa no es nuestra fecha.");
      }
      
    } else {
      // Si no se ha seleccionado ninguna fecha, mostramos un mensaje de error
      alert("Por favor selecciona una fecha.");
    }
  }