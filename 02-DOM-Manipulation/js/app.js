$(function () {
  $("#addTask").on("click", () => {
    let task = $("#taskInput").val().trim();

    if (task === "") {
      $("#taskInput").addClass("is-invalid");
    } else {
      $("#taskList").append(
        `<li>${task} <input type="checkbox" class="checkTask"></li>`,
      );
      $("#taskInput").removeClass("is-invalid");
    }

    $("#taskInput").val("");
  });
});

$("#taskInput").on("input", function () {
  $(this).removeClass("is-invalid");
});

$("#taskList").on("change", ".checkTask", function () {
  let checkbox = $(this);
  let li = checkbox.closest("li");

  Swal.fire({
    icon: "question",
    title: "¿Completar la tarea?",
    showCancelButton: true,
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      li.css("text-decoration", "line-through");
      checkbox.prop("disabled", true);
    } else {
      checkbox.prop("checked", false);
    }
  });
});
