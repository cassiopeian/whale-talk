const submit = document.getElementById('submit');
const reset = document.getElementById('reset');

// When you click the Translate button, the code below will parse through the text input in the #human-text textarea. Vowels are pulled put and pushed into the result array, and E's and U's are doubled.
submit.onclick = () => {
    let input = document.getElementById('human-text').value;
    let whaleText = document.getElementById('whale-text');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let resultArray = [];

    for (let i = 0; i < input.length; i++) {
        for (let x = 0; x < vowels.length; x++) {
            if (input[i] === vowels[x]) {
                if (input[i] === 'e') {
                    resultArray.push('ee');
                } else if (input[i] === 'u') {
                    resultArray.push('uu');
                } else {
                    resultArray.push(input[i]);
                }
            }
        }
    }
    whaleText.innerHTML = resultArray.join('').toUpperCase();
    console.log(`YOU SAID: ${input}`);
    console.log(`WHALE TRANSLATION: ${resultArray.join('').toUpperCase()}.`);
}
