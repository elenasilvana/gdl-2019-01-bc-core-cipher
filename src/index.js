//función cifrado
function encode (offset, str){

	let arr = [];
	str = str.toUpperCase();
	for(let i = 0; i < str.length ; i++ ){

		console.log('charCode ' + str.charCodeAt(i));
		console.log(String.fromCharCode(str.charCodeAt(i)));
		//para que el output text respete los espacios dentro del string
		if (str.charCodeAt(i) === 32) {
			console.log(String.fromCharCode(32));
			arr.push(String.fromCharCode(32));
		}
		else {
			console.log(String.fromCharCode(((str.charCodeAt(i) - 65 + offset) % 26 + 65)));
			arr.push(String.fromCharCode(((str.charCodeAt(i) - 65 + offset) % 26 + 65)));
			
		}

	}
 arr = arr.join('');
 arr;
	document.getElementById("outputText").innerHTML = arr;
}

//medio sirve
//LO9 GA:I:O9 9ON BONI:O9 = LOS GATITOS SON BONITOS
//T, S
function decode (offset, str){

	let arr = [];
	str = str.toUpperCase();
	for(let i = 0; i < str.length ; i++ ){

		console.log('charCode ' + str.charCodeAt(i));
		console.log(String.fromCharCode(str.charCodeAt(i)));
		//para que el output text respete los espacios dentro del string
		if (str.charCodeAt(i) === 32) {
			console.log(String.fromCharCode(32));
			arr.push(String.fromCharCode(32));
		}
		else {
			console.log(String.fromCharCode(((str.charCodeAt(i) - 65 - offset) % 26 + 65)));
			arr.push(String.fromCharCode(((str.charCodeAt(i) - 65 - offset) % 26 + 65)));
			
		}

	}
 arr = arr.join('');
 //return arr
 document.getElementById("outputText").innerHTML = arr;
}



//console.log(arr);

//si offset está vacío mostrar mensaje de que hace falta llenar ese campo

function cipher(){
	//la variable que captura el desplazamiento deseado
	let offset = parseInt(document.getElementById("offset").value);
	//String es la variable que obtiene el texto ingresado por el usuario
	let str = document.getElementById("inputText").value;
	console.log('offset es ' + offset);
	console.log('String es '+ str);
	encode(offset,str);
	document.getElementById("resetElements").reset();
};


function decipher(){
	//variable que captura el desplazamiento para descifrar
	let offset = parseInt(document.getElementById("offset").value);
	//String es la variable que obtiene el texto ingresado por el usuario
	let str = document.getElementById("inputText").value;
	console.log('offset es '+ offset);
	console.log('String es '+ str);
	decode(offset,str);
	document.getElementById("resetElements").reset();


}



function reload(){
	location.reload();
}
