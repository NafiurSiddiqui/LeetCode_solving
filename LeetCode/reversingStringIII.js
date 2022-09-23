function reverseString(s) {

	let newS = s.split(' ');
	let newArr = [];

	for (let i = 0; i < newS.length; i++) {

		newArr.push(newS[i].split('').reverse().join(''));
	}

	return newArr.join(' ');
}

reverseString('I am learning JS'); //Try any word, will reverse the string


