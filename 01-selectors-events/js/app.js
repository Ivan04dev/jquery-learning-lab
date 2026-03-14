$(document).ready(function () {
  $("#btnSaludar").click(function () {
    let nombre = $("#nombre").val();

    $("#mensaje").text("Hola " + nombre);
  });
});
