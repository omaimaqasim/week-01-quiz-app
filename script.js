// ✅ Quiz Questions Array
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

// ✅ Initialize counters
let currentquestion = 0;            // Keeps track of current question index
let countcorrect = 0;              // Counts the number of correct answers
let total_questions = questions.length;  // Stores total number of questions

// ✅ Get DOM elements
const questionText = document.querySelector(".quiz");                    // Where question text is shown
const optionButtons = document.querySelectorAll(".quizoptions button"); // All option buttons
const nextbtn = document.querySelector(".next");                         // "Next" button
const quiz_box = document.querySelector(".quiz_box");                    // Quiz box section
const result_box = document.querySelector(".result_box");                // Result box section
const result_display = document.querySelector(".result");               // Final result score text
const result_message = document.querySelector(".result_message");       // Custom result message

// ✅ Function to display a question and its options
function showquestion() {
  let q = questions[currentquestion];                      // Get current question object
  questionText.textContent = "Question: " + q.question;    // Update question text in UI

  // Loop through each option button and set its text and behavior
  optionButtons.forEach((btn, index) => {
    btn.textContent = q.options[index];       // Set button text from options array
    btn.classList.remove("correct", "wrong"); // Reset classes (in case already clicked before)
    btn.disabled = false;      // Re-enable button for new question

    // ✅ Set onClick behavior
    btn.onclick = () => {
      const selectedOption = btn.textContent;              // Get selected option text

      // Check if answer is correct
      if (selectedOption === q.answer) {
        btn.classList.add("correct");                      // Add green background
        countcorrect++;                                    // Increase correct counter
      } else {
        btn.classList.add("wrong");                        // Add red background
      }

      // ✅ Disable all buttons after one selection to prevent multiple answers
      optionButtons.forEach(b => b.disabled = true);
    };
  });
}

// ✅ Show the first question on initial load
showquestion();

// ✅ Handle "Next" button click
nextbtn.addEventListener("click", () => {
  currentquestion++;                        // Move to next question index

  if (currentquestion < total_questions) {
    showquestion();                         // If more questions, show next one
  } else {
    // ✅ No more questions → Show result
    quiz_box.style.display = "none";        // Hide quiz box
    result_box.style.display = "flex";      // Show result box (flex for layout)

    result_display.textContent = `You got ${countcorrect} out of ${total_questions} questions right.`; // Show score

    generateResultMessage();                // Call function to display custom message
  }
});

// ✅ Function to display message based on score
function generateResultMessage() {
  let score = countcorrect;                 // Get total correct answers

  if (score === total_questions) {
    result_message.textContent = "🌟 Perfect Score! You're a genius!";
  } else if (score >= total_questions * 0.7) {
    result_message.textContent = "👍 Great job! Keep it up!";
  } else if (score >= total_questions * 0.4) {
    result_message.textContent = "🙂 Not bad, but there's room to improve.";
  } else {
    result_message.textContent = "💪 Keep practicing! You'll get better.";
  }
}
