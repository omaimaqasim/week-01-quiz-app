// ✅ Array of quiz questions and answers
let questions = [
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Islamabad", "Lahore", "Quetta"],
    answer: "Islamabad"
  },
  {
    question: "Which one is a fruit?",
    options: ["Carrot", "Apple", "Potato", "Tomato"],
    answer: "Apple"
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "HTML", "Java"],
    answer: "HTML"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    answer: "Mars"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    answer: "Blue Whale"
  },
  {
    question: "Which Islamic month is for fasting?",
    options: ["Muharram", "Shawwal", "Ramadan", "Rabi-ul-Awwal"],
    answer: "Ramadan"
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Yangtze", "Nile", "Indus"],
    answer: "Nile"
  },
  {
    question: "Who invented the light bulb?",
    options: ["Newton", "Edison", "Einstein", "Tesla"],
    answer: "Edison"
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "80°C", "110°C"],
    answer: "100°C"
  },
  {
    question: "Which Surah is the longest in the Quran?",
    options: ["Surah Fatiha", "Surah Baqarah", "Surah Ikhlas", "Surah Rahman"],
    answer: "Surah Baqarah"
  }
];

let countcorrect = 0 ;
// ✅ Keeps track of the current question index
let currentquestion = 0;

// ✅ Select the question display area from the HTML
const questionText = document.querySelector(".quiz");

// ✅ Select all the option buttons from the HTML
const optionButtons = document.querySelectorAll(".quizoptions button");

// ✅ Function to display the current question and its options
function showquestion() {
  let q = questions[currentquestion]; // Get current question object
  questionText.textContent = "Question: " + q.question; // Set question text

  // ✅ Set the text of each option button and attach click event
  optionButtons.forEach((btn, index) => {
    btn.textContent = q.options[index]; // Assign option text

    // ✅ When user clicks on an option
    btn.onclick = () => {
      const selectedOption = btn.textContent;

      // ✅ Check if the selected option is correct
      if (selectedOption === q.answer) {
        btn.classList.add("correct"); // Highlight correct answer
        countcorrect++

      } else {
        btn.classList.add("wrong"); // Highlight wrong answer
      }

      // ✅ Disable all buttons after one is clicked
      optionButtons.forEach(b => b.disabled = true);
    };
  });
}

// ✅ Show the first question when the page loads
showquestion();

// ✅ Select the "Next" button from the HTML
let nextbtn = document.querySelector(".next");

// ✅ When next button is clicked → move to next question
nextbtn.addEventListener("click", nextquestion);

// ✅ Function to go to the next question
function nextquestion() {
  currentquestion++; // Move to next question index

  // ✅ If all questions are done, show final message
  if (currentquestion === questions.length) {
    alert("YOU COMPLETED THE QUIZ CONGRATULATION !");
    alert("you got " +countcorrect+ " out of 10 ")
  }

  // ✅ Show the next question (even if after last, will just repeat)
  showquestion();

  // ✅ Reset button styles and enable buttons for next round
  optionButtons.forEach((btn) => {
    btn.classList.remove("correct", "wrong"); // Remove previous highlights
    btn.disabled = false; // Enable the buttons again
  });
}

