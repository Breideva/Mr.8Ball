const vague = [
  "Yes",
  "No",
  "Maybe",
  "Unlikely",
  "It's certain",
  "Never",
  "It's possible",
];
const whenQue = [
  "Tomorrow",
  "Never",
  "Soon to come",
  "Next week",
  "Already happened",
  "Unknown",
  "Today",
];
const whereQue = [
  "Your home",
  "A different country",
  "Paris",
  "The store",
  "Your dream vacation",
  "In the sky",
  "Underground",
];
const whoQue = [
  "Your family",
  "A celebrity",
  "Lebron James",
  "The love of your life",
  "Your enemy",
  "You",
  "A stranger",
];
const howQue = [
  "Fast",
  "Slow",
  "Easy",
  "Terrible",
  "Hilarious",
  "Old",
  "Cheerful",
  "Silly",
];

const subBtn = document.querySelector(".sub-btn");
const input = document.querySelector(".answer");
const result = document.querySelector(".result");
const ansLog = document.querySelector(".all-answers");
const askedQ = document.querySelector(".asked-q");
const answerR = document.querySelector(".return-r");

function appendQ(tag, content) {
  const element = document.createElement(tag);
  element.innerHTML = content;
  askedQ.appendChild(element);
}
function appendR(tag, content) {
  const element = document.createElement(tag);
  element.innerHTML = content;
  answerR.appendChild(element);
}

function handleButtonClick() {
  if (input.value === "") {
    alert("Ask Mr.8 Ball a question");
    return;
  }

  let question = input.value;

  result.classList.remove("color");
  void result.offsetWidth;
  result.classList.add("bck-color", "color");

  for (let i = 0; i < 1; i++) {
    if (input.value.toLowerCase().includes("when")) {
      result.textContent = whenQue[whenFunction()];
    } else if (input.value.toLowerCase().includes("where")) {
      result.textContent = whereQue[whenFunction()];
    } else if (input.value.toLowerCase().includes("who")) {
      result.textContent = whoQue[whenFunction()];
    } else if (input.value.toLowerCase().includes("how")) {
      result.textContent = howQue[whenFunction()];
    } else {
      result.textContent = vague[whenFunction()];
    }
  }
  input.value = "";
  if (parseInt(result.innerHTML.length) >= 5) {
    result.style.fontSize = "35px";
  } else {
    result.style.fontSize = "60px";
  }

  appendQ("h3", "Question");
  appendQ("p", question);
  appendR("h3", "Answer");
  appendR("p", result.textContent);
}

subBtn.addEventListener("click", handleButtonClick);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleButtonClick();
  }
});

function whenFunction() {
  return Math.floor(Math.random() * vague.length);
}
