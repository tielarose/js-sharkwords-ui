const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

const WORDS = [
  "strawberry",
  "orange",
  "apple",
  "banana",
  "pineapple",
  "kiwi",
  "peach",
  "pecan",
  "eggplant",
  "durian",
  "peanut",
  "chocolate"
];

const numWrong = 0;

// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//
const createDivsForChars = (word) => {
  const wordContainer = document.querySelector("#word-container");

  for (const letter of word) {
    const letterDiv = `<div class="letter-box ${letter}"></div>`;
    wordContainer.insertAdjacentHTML("beforeend", letterDiv);
  }
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons".
const generateLetterButtons = () => {
  // Replace this with your code
  const letterButtons = document.querySelector("#letter-buttons");

  for (const letter of ALPHABET) {
    const button = `<button>${letter}</button>`;
    letterButtons.insertAdjacentHTML("beforeend", button);
  }
};

// Set the `disabled` property of `buttonEl` to true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter) =>
  document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
  const letterDivs = document.querySelectorAll(`.${letter}`);

  for (const div of letterDivs) {
    div.innerHTML = `${letter}`;
  }
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  // Replace this with your code
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = "/sharkwords";
};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = "hello";
  // let randomIndex = Math.floor(Math.random() * WORDS.length);
  // let randomWord = WORDS[randomIndex];

  createDivsForChars(word);

  generateLetterButtons();

  for (const button of document.querySelectorAll("button")) {
    // add an event handler to handle clicking on a letter button
    // YOUR CODE HERE
    // add an event handler to handle clicking on the Play Again button
    // YOUR CODE HERE
  }
})();
