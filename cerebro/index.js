AOS.init();

// Animar sección: Por que deberías tener un sitio web
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

// Animar sección: Porque deberías de elegirme
// Animar razón 1
document.querySelector("#imgFijada2")
.addEventListener("mouseenter", function() {
	document.querySelector("#contenidoCaracteristica1")
	.className += " opacity-100"
});
// Animar razón 2
document.querySelector("#caracteristica1")
.addEventListener("mouseenter", function() {
	document.querySelector("#contenidoCaracteristica2")
	.className += " opacity-100"
});
// Animar razón 3
document.querySelector("#caracteristica2")
.addEventListener("mouseenter", function() {
	document.querySelector("#contenidoCaracteristica3")
	.className += " opacity-100"
});
// Animar razón 4
document.querySelector("#caracteristica3")
.addEventListener("mouseenter", function() {
	document.querySelector("#contenidoCaracteristica4")
	.className += " opacity-100"
});