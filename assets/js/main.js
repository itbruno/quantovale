(function(window, document){
	'use strict';

	// Overlay
	var overlay = document.querySelector('.overlay'),
		resultado = document.getElementById('resultado'), // Modal de resultado
		calculoFinal = resultado.querySelector('.calculoFinal'); // Calculo final(resultado)

	// Pega valores
	var myForm = document.forms['quantoVale'],
		nome = myForm.elements['nome'],
		salario = myForm.elements['salario'],
		dias = myForm.elements['dias'],
		horas = myForm.elements['horas'];

	// Calculo
	function calculaTotal() {
		return (parseFloat(salario.value) / dias.value) / horas.value;
	};

	// Funcao para montar resultado final
	function showCalculo() {
		// Exibe nome no modal de resultado
		resultado.querySelector('.nome').innerHTML = nome.value;

		// Exibe Total
		var total = calculaTotal();
		calculoFinal.innerHTML = "R$ " + total.toFixed(2);

		// Mostra Resultado
		overlay.style.display = 'block';
		resultado.style.display = 'block';
	}

	myForm.onsubmit = function() {

		// Monta Resultado
		showCalculo();

		// Debug
		console.log(parseFloat(salario.value));
		console.log(dias.value);
		console.log(horas.value);

		return false;
	}

	// Fecha modal
	overlay.onclick = function() {
		this.style.display = 'none';
		resultado.style.display = 'none';
	}

})(window, document, undefined);
