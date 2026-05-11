const listaDeTeclas = document.querySelectorAll(".tecla");
const listaDeSons = document.querySelectorAll("audio");

function tocarSons(seletorAudio) {
	const elemento = document.querySelector(seletorAudio);

	if (elemento && elemento.localName === "audio") {
		elemento.play();
	} else {
		console.log("Elemento não encontrado ou seletor inválido");
	}
}

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
	const tecla = listaDeTeclas[contador];
	const instrumento = tecla.classList[1];
	tecla.onclick = function () {
		tocarSons(`#som_${instrumento}`);
	};
	tecla.onkeydown = function (evento) {
		if (evento.code === "Space" || evento.code === "Enter") {
			tecla.classList.add("ativa");
		}
	};
	tecla.onkeyup = function () {
		tecla.classList.remove("ativa");
	};
}
