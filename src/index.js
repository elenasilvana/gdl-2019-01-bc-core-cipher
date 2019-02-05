

function reload(){
	location.reload();
}
document.getElementById("refresh").addEventListener("click", reload);
//si offset está vacío mostrar mensaje de que hace falta llenar ese campo

function cifrar(){
	//la variable que captura el desplazamiento deseado
	let offset = parseInt(document.getElementById("offset").value);
	//String es la variable que obtiene el texto ingresado por el usuario
	let str = document.getElementById("inputText").value;
	let outputStr = cipher.encode(offset,str);
	document.getElementById("resetElements").reset();
	document.getElementById("outputText").innerHTML = outputStr;
}
document.getElementById("cifrar").addEventListener("click",cifrar);


function decifrar(){
	//variable que captura el desplazamiento para descifrar
	let offset = parseInt(document.getElementById("offset").value);
	//String es la variable que obtiene el texto ingresado por el usuario
	let str = document.getElementById("inputText").value;
	let outputStr = cipher.decode(offset,str);
	document.getElementById("resetElements").reset();
	document.getElementById("outputText").innerHTML = outputStr;
}
document.getElementById("descifrar").addEventListener("click",decifrar);


