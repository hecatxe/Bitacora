if (document.querySelector("#boton")) {
  document.querySelector("#boton").addEventListener("click", () => {
    let entrada = document.querySelector("#entrada").value;
    let fecha = document.querySelector("#fecha").value;

    // Guardar en localStorage
    if (entrada && fecha) {
      let entradas = JSON.parse(localStorage.getItem("entradas")) || [];

      // Agregar nueva entrada
      entradas.push({ fecha: fecha, entrada: entrada });

      // Guardar en localStorage
      localStorage.setItem("entradas", JSON.stringify(entradas));
      // Limpiar formulario
      document.querySelector("#entrada").value = "";
      document.querySelector("#fecha").value = "";
      alert("Guardado correctamente.");
    } else {
      alert("Por favor completa todos los campos.");
    }
  });
}

if (document.querySelector("#mostrar")) {
  document.querySelector("#mostrar").addEventListener("click", () => {
    // Recuperar entradas del localStorage
    let entradas = JSON.parse(localStorage.getItem("entradas")) || [];

    if (entradas.length > 0) {
      // Generar el contenido para mostrar todas las entradas
      let salida = entradas
        .map(
          (item) => `<div class="mostrarBitacora">
          <p><strong>Fecha:</strong> ${item.fecha}</p>
          <p>${item.entrada}</p>
        </div><hr>`
        )
        .join("");
      document.querySelector("#salida").innerHTML = salida;
    } else {
      document.querySelector("#salida").innerHTML =
        "<p>No hay entradas guardadas.</p>";
    }
  });
}
