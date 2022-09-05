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

    // let newArr = [];
	// const firstSubNumber = ['I','X', 'C'];
	// const secondSubNumber = ['V', 'L', 'D', 'X','C','M'];

	let newInput = s.split('');
	let result = 0;

	newInput.forEach((el, index) => {
				console.log(el, index);
				// console.log(`nextEl: ${romanSymbols[el + 1]}`);
				console.log(romanSymbols[el]);
				console.log(romanSymbols[newInput[index + 1]]);
				console.log('-------');

				if (romanSymbols[el] < romanSymbols[newInput[index + 1]]) result -= romanSymbols[el];
				else result += romanSymbols[el];

				// result += romanSymbols[el]

				// if(romanSymbols[el] )


		});
	
		console.log(result);

	
};

romanToInt('LVIII');


