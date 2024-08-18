const textArea = document.querySelector(".input-text");
const mensagem = document.querySelector(".output-text");


function validarTextoECriptografar(){
	let texto = textArea.value.trim();
	let regex = /[A-ZÀ-Ýà-ÿ]/u;
	let alerta = document.getElementById("mensagemAlerta");
	let imagem = document.getElementById("gatinho");

	if (regex.test(texto)){
		alerta.textContent = "Texto inválido!";
		imagem.src = "imagens/alerta.png";
	} else if (texto === ""){
		imagem.src = "imagens/alerta.png"
		alerta.textContent = "Nenhum texto digitado."
	} else {
		imagem.src = "imagens/chat (1).png";
		alerta.textContent = "Mensagem criptografada!";
		botaoCriptografar();
	}
}


function validarTextoEDescriptografar(){
	let texto = textArea.value.trim();
	let regex = /[A-ZÀ-Ýà-ÿ]/u;
	let alerta = document.getElementById("mensagemAlerta");
	let imagem = document.getElementById("gatinho");

	if (regex.test(texto)){
		alerta.textContent = "Texto inválido!";
		imagem.src = "imagens/alerta.png";
	} else if (texto === ""){
		imagem.src = "imagens/alerta.png"
		alerta.textContent = "Nenhum texto digitado."
	} else {
		imagem.src = "imagens/chat (1).png";
		alerta.textContent = "Mensagem Descriptografada!";
		botaoDescriptografar();
	}
}


function botaoCriptografar(){
	const textoEncriptado = criptografar(textArea.value);
	mensagem.value = textoEncriptado;
	textArea.value = "";
}

function botaoDescriptografar(){
	const textoDesencriptado = descriptografar(textArea.value);
	mensagem.value = textoDesencriptado;
	textArea.value = "";
}


function criptografar (stringEncriptada){
	let criptografia = [["e", 'enter'] , ["i", "imes"], ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

	stringEncriptada = stringEncriptada;

	for (let i = 0; i < criptografia.length; i++){
		if (stringEncriptada.includes(criptografia[i][0])){
			stringEncriptada = stringEncriptada.replaceAll(criptografia[i][0], criptografia[i][1]);
		}
	}

	return stringEncriptada;
}


function descriptografar (stringDesencriptada){
	let criptografia = [["e", 'enter'] , ["i", "imes"], ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

	stringDesencriptada = stringDesencriptada;

	for (let i = 0; i < criptografia.length; i++){
		if (stringDesencriptada.includes(criptografia[i][1])){
			stringDesencriptada = stringDesencriptada.replaceAll(criptografia[i][1], criptografia[i][0]);
		}
	}

	return stringDesencriptada;
}


function limparTexto(){
	mensagem.value = "";
	textArea.value = "";
}

function copiarMensagem (){
	let alerta = document.getElementById("mensagemAlerta")
	let textoASerCopiado = document.querySelector(".output-text")

	textoASerCopiado.select()
	textoASerCopiado.setSelectionRange(0, 9999);

	navigator.clipboard.writeText(textoASerCopiado.value);

	alerta.textContent = "Texto copiado!"

	limparTexto()
}






