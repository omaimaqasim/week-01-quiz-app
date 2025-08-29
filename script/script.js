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

// ✅ Initialize State Variables
let currentquestion = 0;
let countcorrect = 0;
let total_questions = questions.length;

// ✅ DOM Elements
const questionText = document.querySelector(".quiz");
const optionButtons = document.querySelectorAll(".quizoptions button");
const nextbtn = document.querySelector(".next");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const result_display = document.querySelector(".result");
const result_message = document.querySelector(".result_message");
const scorebox = document.querySelector(".scorebox");
const progressbar = document.querySelector(".progressbar");

// ✅ Load First Question
showquestion();
updateScore(); // show initial score
updateProgress(); // show initial progress

// ✅ Function: Display Current Question
function showquestion() {
  let q = questions[currentquestion];
  questionText.textContent = "Question: " + q.question;
  updateProgress()

  optionButtons.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;

    btn.onclick = () => {
      const selected = btn.textContent;

      if (selected === q.answer) {
        btn.classList.add("correct");
        countcorrect++;
      } else {
        btn.classList.add("wrong");
      }

      // Disable all buttons after one is selected
      optionButtons.forEach(b => b.disabled = true);

      // Update score immediately
      updateScore();
    };
  });
}

// ✅ Function: Update Score Display
function updateScore() {
  scorebox.textContent = `Score: ${countcorrect} / ${total_questions}`;
}

// ✅ Function: Update Progress Bar
function updateProgress() {
  let percent = ((currentquestion +1)/ total_questions) * 100;
  progressbar.style.width = percent + "%";
  progressbar.textContent = percent + "%";
}

// ✅ Handle Next Button Click
nextbtn.addEventListener("click", () => {
  currentquestion++;

  if (currentquestion < total_questions) {
    showquestion();
  } else {
    // Quiz Finished
    quiz_box.style.display = "none";
    result_box.style.display = "flex";

    result_display.textContent = `You got ${countcorrect} out of ${total_questions} questions right.`;
    generateResultMessage();

    // Ensure progress bar shows full
    progressbar.style.width = "100%";
    progressbar.textContent = "100%";
  }
});

// ✅ Function: Show Result Message Based on Score
function generateResultMessage() {
  if (countcorrect === total_questions) {
    result_message.textContent = "🌟 Perfect Score! You're a genius!";
  } else if (countcorrect >= total_questions * 0.7) {
    result_message.textContent = "👍 Great job! Keep it up!";
  } else if (countcorrect >= total_questions * 0.4) {
    result_message.textContent = "🙂 Not bad, but there's room to improve.";
  } else {
    result_message.textContent = "💪 Keep practicing! You'll get better.";
  }
}

// ✅ Function: Restart Quiz
function restartQuiz() {
  currentquestion = 0;
  countcorrect = 0;

  result_box.style.display = "none";
  quiz_box.style.display = "block";

  showquestion();
  updateScore();
  updateProgress();
}


// now will give time a day after tomorrow