$(function () {
  // Evento para agregar la tarea
  $("#addTask").on("click", () => {
    let task = $("#taskInput").val().trim();

    // Validación
    if (task === "") {
      $("#taskInput").addClass("is-invalid");
    } else {
      // Si pasa la validación agrega la tarea y el checkbox
      $("#taskList").append(
        `<li>${task} <input type="checkbox" class="checkTask"></li>`,
      );
      $("#taskInput").removeClass("is-invalid");
    }

    // Limpia el input de agregar tarea
    $("#taskInput").val("");
  });
});

// Remueve la clase en cuanto comience a escribir texto en el input
$("#taskInput").on("input", function () {
  $(this).removeClass("is-invalid");
});

// Captura el evento click del elemento li dentro de la lista, (completar la tarea)
$("#taskList").on("change", ".checkTask", function () {
  let checkbox = $(this);
  let li = checkbox.closest("li");

  // Muestra la alerta
  Swal.fire({
    icon: "question",
    title: "¿Completar la tarea?",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  }).then((result) => {
    // Si se confirma como completada, cambia el text decoration y la deshabilita
    if (result.isConfirmed) {
      li.css("text-decoration", "line-through");
      checkbox.prop("disabled", true);
    } else {
      checkbox.prop("checked", false);
    }
  });
});
