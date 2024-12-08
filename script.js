const wordBank = [
   "well", "blue", "red", "green", "yellow", "black", "white", "gray", "brown", "pink", "there", "their", "these", "those", "which", "where", "when", "why"
];

let generatedWords = [];

document.getElementById("generateButton").addEventListener("click", generateWords);
document.getElementById("submitButton").addEventListener("click", checkInput);

function generateWords() {
  generatedWords = [];
  for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * wordBank.length);
      generatedWords.push(wordBank[randomIndex]);
  }
  document.getElementById("wordList").innerText = generatedWords.join(', ');
  document.getElementById("userInput").value = '';
  document.getElementById("submitButton").style.display = 'inline-block';
  document.getElementById("result").innerText = '';
}

function checkInput() {
  const userInput = document.getElementById("userInput").value.trim().split(' ');
  if (JSON.stringify(userInput) === JSON.stringify(generatedWords)) {
      document.getElementById("result").innerText = 'Success! You typed the correct words!';
  } else {
      document.getElementById("result").innerText = 'Try again! Make sure to type the words correctly.';
  }
}
