//función que medio sirve
function cifrar (str){

	let arr = [];
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
return arr;
}


function cipher(){
	//la variable que captura el desplazamiento deseado
	let offset = document.getElementById("offset").value;
	//String es la variable que obtiene el texto ingresado por el usuario
	let string = document.getElementById("inputText").value;
	string = string.toUpperCase(); //colocar en la función cuando sirva
	//convertir String a mayúsculas
	console.log('El offset contiene ' + offset);
	console.log('String es '+ string);
	encode(offset,string);
};

function reload(){
	location.reload();
}
