const questions = [
  {
    text: "Shonie, why are you here?",
    options: ["Just clicked", "Miss Baiko", "No idea"]
  },
  {
    text: "Be honest 😌",
    options: ["I miss Baiko", "I REALLY miss Baiko", "I’m pretending I don’t"]
  },
  {
    text: "If Baiko is angry, what do you do?",
    options: ["Say sorry", "Give hug", "All of the above"]
  },
  {
    text: "Who do you choose?",
    options: ["Ego", "Peace", "Baiko"]
  },
  {
    text: "Life without Baiko would be…",
    options: ["Empty", "Boring", "Impossible"]
  },
  {
    text: "Do you want to be with Baiko?",
    options: ["Yes", "Obviously yes", "Why is this even a question"]
  },
  {
    text: "Shonie… I want to marry you 💍",
    options: ["Yes", "No"]
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

function loadQuestion() {
  optionsEl.innerHTML = "";

  const q = questions[currentQuestion];
  questionEl.textContent = q.text;

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => handleAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function handleAnswer(answer) {
  // Special case: marriage question
  if (questions[currentQuestion].text.includes("marry") && answer === "No") {
    questionEl.textContent = "Wrong answer detected 😤\nTry again.";
    optionsEl.innerHTML = "";

    const yesBtn = document.createElement("button");
    yesBtn.textContent = "Yes ❤️";
    yesBtn.onclick = showFinal;
    optionsEl.appendChild(yesBtn);

    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showFinal();
  }
}

function showFinal() {
  questionEl.textContent = "Congratulations Shonie 🎉";
  optionsEl.innerHTML = `
    <p>You officially choose Baiko ❤️</p>
    <p>No more fighting.</p>
    <p>No more drama.</p>
    <p>Only love, hugs, and forever 💖</p>
  `;
}

loadQuestion();
