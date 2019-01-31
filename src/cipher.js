window.cipher = {

	  encode: function (offset, str){

		let arr = [];
		str = str.toUpperCase();
		for(let i = 0; i < str.length ; i++ ){

			//para que el output text respete los espacios dentro del string
			if (str.charCodeAt(i) === 32) {
				//console.log(String.fromCharCode(32));
				arr.push(String.fromCharCode(32));
			}
			else {
				//console.log(String.fromCharCode(((str.charCodeAt(i) - 65 + offset) % 26 + 65)));
				arr.push(String.fromCharCode(((str.charCodeAt(i) - 65 + offset) % 26 + 65)));
				
			}

		}
	 arr = arr.join('');
	 arr;
		document.getElementById("outputText").innerHTML = arr;
	 },

	 decode: function (offset, str){

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

  
};
