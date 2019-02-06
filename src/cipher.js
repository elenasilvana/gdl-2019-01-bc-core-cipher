window.cipher = {

	encode: function (offset, str){

		let arr = [];
		str = str.toUpperCase();
		for(let i = 0; i < str.length ; i++ ){
			
			//para que el output text respete los espacios dentro del string
			if (str.charCodeAt(i) === 32) {
				arr.push(String.fromCharCode(32));
			}
			else {
				//arreglo que se llena con las letras que ya reflejan el desplazamiento
				arr.push(String.fromCharCode(((str.charCodeAt(i) - 65 + offset) % 26 + 65)));
				
			}
		}
	arr = arr.join('');
	//document.getElementById("outputText").innerHTML = arr;
	return arr;
},

decode: function (offset, str){

		let arr = [];
		str = str.toUpperCase();
		for(let i = 0; i < str.length ; i++ ){

			//para que el output text respete los espacios dentro del string
			if (str.charCodeAt(i) === 32) {
				arr.push(String.fromCharCode(32));
			}
			else {
				//arreglo que se llena con las letras a las que se les ha restado el desplazamiento
				arr.push(String.fromCharCode(((str.charCodeAt(i) + 65 - offset) % 26 + 65)));
				
			}

		}
	arr = arr.join('');
	//document.getElementById("outputText").innerHTML = arr;
	return arr;
	}

  
};
