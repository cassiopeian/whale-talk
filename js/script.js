const input = 'Can you tell me what is going on here?';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let x = 0; x < vowels.length; x++) {
    if (input[i] === vowels[x]) {
      if (input[i] === 'e') {
        resultArray.push('ee');
      }
          else if (input[i] === 'u') {
            resultArray.push('uu');
          }
          else {
            resultArray.push(input[i]);
          }
        }
      }
    }

console.log(resultArray.join('').toUpperCase());