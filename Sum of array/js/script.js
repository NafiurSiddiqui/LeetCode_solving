function main() {
 //ask for user input

 let input = prompt('Please input some numbers only: ');
 //split the input on whitespace
 let inputSpaced = input.split('');

 //parse string to integer
 let inputParsed = inputSpaced.map((arr) => parseInt(arr, 10));

 console.log(input, inputSpaced, inputParsed);

 //call the sumFunction
 sum(inputParsed);
}

//define sumFunction

function sum(n) {
 console.log('n is : ', n);
 let total = n.reduce((acc, value) => {
  return acc + value;
 });
 console.log(total);
 return total;
}

main();
