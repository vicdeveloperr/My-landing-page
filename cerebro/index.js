// Activar animaciones de scroll con AOS
AOS.init();

// Animar sección: Por qué deberías tener un sitio web
var razon1 = document.querySelector("#razon1");
var razon2 = document.querySelector("#razon2");
var razon3 = document.querySelector("#razon3");
var razon4 = document.querySelector("#razon4");
var razon5 = document.querySelector("#razon5");
var delay = 350;

function animarRazones(){
	var temporizador1 = setTimeout(a => {
		razon1.className += " shadow-sombra";
		clearTimeout(temporizador1);
		animarRazon2();
	}, delay);

	function animarRazon2(){
		var temporizador2 = setTimeout(a => {
			razon2.className += " shadow-sombra";
			clearTimeout(temporizador2);
			animarRazon3();
		}, delay);  
	}

	function animarRazon3(){
		var temporizador3 = setTimeout(a => {
			razon3.className += " shadow-sombra";
			clearTimeout(temporizador3);
			animarRazon4();
		}, delay);  
	}

	function animarRazon4(){
		var temporizador4 = setTimeout(a => {
			razon4.className += " shadow-sombra";
			clearTimeout(temporizador4);
			animarRazon5();
		}, delay);  
	}

	function animarRazon5(){
		var temporizador5 = setTimeout(a => {
			razon5.className += " shadow-sombra";
			clearTimeout(temporizador5);
			animarRazon5();
		}, delay);  
	}
}

document.querySelector("#seccion-porque-necesitas-un-sitio-web")
.addEventListener("mouseenter", function(){
	animarRazones();
});

if(window.matchMedia("(max-width: 800px)").matches){
	window.addEventListener("scroll", a => {
		if(scrollY >= 950.4000244140625){
			animarRazones();
		}
	});
}

// Envío del formulario de contacto por ajax
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
	  document.querySelector("#agregarNombreDelInteresado").textContent = document.querySelector("#nombre").value;
	  let elementoEnvioExitoso = document.querySelector("#envioExitoso");
	  elementoEnvioExitoso.classList.remove("hidden");
		let temporizador = setTimeout(() => {
	    elementoEnvioExitoso.classList.add("hidden");
	    clearTimeout(temporizador);
	  }, 4500);
	  // Limpiamos el formulario
	  document.querySelector("#nombre").value = null;
	  document.querySelector("#email").value = null;
	  document.querySelector("#mensaje").value = null;
    })
    .catch((error) => alert(error));
};
