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


	let newInput = s.split('');
	let result = 0;

	//forEach
	// newInput.forEach((el, index) => {

	// 			if (romanSymbols[el] < romanSymbols[newInput[index + 1]]) result -= romanSymbols[el];
	// 			else result += romanSymbols[el];

	// 	});
	
		//traditional loop	
		for (let i = 0; i < newInput.length; i++){

			let curInput = romanSymbols[newInput[i]];
			let nextInput = romanSymbols[newInput[i + 1]];

			curInput < nextInput ? result -= romanSymbols[newInput[i]]: result += romanSymbols[newInput[i]];


		}

		console.log(result);

};

romanToInt('LVIII');


