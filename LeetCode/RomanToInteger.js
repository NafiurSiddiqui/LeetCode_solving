var romanToInt = function (s) {
	//roman symbols and value

	const romanSymbols = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};


	//convert the input to the integer

    let newArr = [];
	const firstSubNumber = ['I','X', 'C'];
	const secondSubNumber = ['V', 'L', 'D', 'X','C','M'];
	

	if (s.length >= 1 && s.length <= 15) {
			
		let newInput = s.split('');
		let result = 0;

	    
		// newInput.forEach((element, i) => {
		// 		// console.log(element, i);

		// 		console.log(romanSymbols[element], romanSymbols[s[i]]);
		// });

		for( let i = 0; i < newInput.length; i++){
			console.log(`First: ${newInput[i]}`);

			for(let j = newInput.length - 1; j >= 0  ; j--){

				console.log(`Second: ${newInput[j]}`);
			}
		}

	};
	
};

romanToInt('IXVDXX');


