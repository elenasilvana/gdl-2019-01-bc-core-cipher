

//si offset está vacío mostrar mensaje de que hace falta llenar ese campo

function cipher(){
	//la variable que captura el desplazamiento deseado
	let offset = parseInt(document.getElementById("offset").value);
	//String es la variable que obtiene el texto ingresado por el usuario
	let str = document.getElementById("inputText").value;
	console.log('offset es ' + offset);
	console.log('String es '+ str);
	cipher.encode(offset,str);
	document.getElementById("resetElements").reset();
};


function decipher(){
	//variable que captura el desplazamiento para descifrar
	let offset = parseInt(document.getElementById("offset").value);
	//String es la variable que obtiene el texto ingresado por el usuario
	let str = document.getElementById("inputText").value;
	console.log('offset es '+ offset);
	console.log('String es '+ str);
	cipher.decode(offset,str);
	document.getElementById("resetElements").reset();


}



function reload(){
	location.reload();
}
