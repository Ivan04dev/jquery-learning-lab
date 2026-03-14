// Similar a DOMContentLoaded
$(document).ready(function () {
  // Evento click en el botón
  $("#btnSaludar").click(function () {
    // Lee y asigna el valor del input nombre
    let nombre = $("#nombre").val();
    // Agrega al párrafo con id mensaje la cadena "Hola" y el nombre almacenado en la variable anterior
    $("#mensaje").text("Hola " + nombre);
  });
});
