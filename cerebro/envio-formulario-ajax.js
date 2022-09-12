let myForm = document.querySelector("#formulario-contacto");

myForm.addEventListener("submit", enviar);

function enviar(e) {
  e.preventDefault();
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => {
      let elementoEnvioExitoso = document.querySelector("#envioExitoso");
      elementoEnvioExitoso.classList.remove("hidden");
    	let temporizador = setTimeout(() => {
        elementoEnvioExitoso.classList.add("hidden");
        clearTimeout(temporizador);
      }, 4100);
      // Limpiamos el formulario
      document.querySelector("#nombre").value = null;
      document.querySelector("#email").value = null;
      document.querySelector("#mensaje").value = null;
    })
    .catch((error) => alert(error));
};