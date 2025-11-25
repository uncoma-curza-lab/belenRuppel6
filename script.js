document.addEventListener("DOMContentLoaded", () => {

  
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', () => {
      if (!input.checkValidity()) {
        input.reportValidity(); 
      }
    });
  });

  const form = document.getElementById("form-contacto");

  if (form) {
    const tabla = document.querySelector("#tabla-datos tbody");

    function actualizarTabla() {
      tabla.rows[0].cells[1].textContent = form.nombre.value;
      tabla.rows[1].cells[1].textContent = form.apellido.value;
      tabla.rows[2].cells[1].textContent = form.edad.value;
      tabla.rows[3].cells[1].textContent = form.email.value;
      tabla.rows[4].cells[1].textContent = form.telefono.value;
      tabla.rows[5].cells[1].textContent = form.direccion.value;
      tabla.rows[6].cells[1].textContent = form.provincia.value;
      tabla.rows[7].cells[1].textContent = form.codigo_postal.value;

      const metodo = form.querySelector("input[name='metodo_contacto']:checked");
      tabla.rows[8].cells[1].textContent = metodo ? metodo.nextElementSibling.textContent : "";

      const suscripciones = Array.from(
        form.querySelectorAll("input[name='suscripcion[]']:checked")
      )
        .map(op => op.value)
        .join(", ");
      tabla.rows[9].cells[1].textContent = suscripciones;
    }

    form.addEventListener("input", actualizarTabla);
    form.addEventListener("change", actualizarTabla);
  }


  /* BOTÓN LEER MÁS */
  const boton = document.getElementById("btn-leer-mas");
  const extra = document.getElementById("texto-extra");

  if (boton && extra) {
    boton.addEventListener("click", () => {
      if (extra.style.display === "block") {
        extra.style.display = "none";
        boton.textContent = "Leer más";
      } else {
        extra.style.display = "block";
        boton.textContent = "Leer menos";
  }
    });
  }


  /* JUEGO */
  let numeroSecreto = Math.floor(Math.random() * 10) + 1;

  const inputJuego = document.getElementById("input-juego");
  const botonJuego = document.getElementById("boton-adivinar");
  const mensajeJuego = document.getElementById("mensaje-juego");

  if (inputJuego && botonJuego && mensajeJuego) {
    botonJuego.addEventListener("click", () => {
      const valor = parseInt(inputJuego.value);

      if (isNaN(valor)) {
        mensajeJuego.textContent = "Ingresá un número válido";
        mensajeJuego.style.color = "red";
        return;
      }

      if (valor === numeroSecreto) {
        mensajeJuego.textContent = "🎉¡¡GENIAL!!🎉 Adivinaste el número";
        mensajeJuego.style.color = "white";
      } else if (valor > numeroSecreto) {
        mensajeJuego.textContent = "Frío. Probá más abajo";
        mensajeJuego.style.color = "white";
      } else {
        mensajeJuego.textContent = "Frío. Probá más arriba";
        mensajeJuego.style.color = "white";
      }
    });
  }

});