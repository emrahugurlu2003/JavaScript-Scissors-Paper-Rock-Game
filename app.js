var modalVisible = false; // Track the modal's visibility
function toggleModal() {
  // Get the modalContent element
  var modalContent = document.getElementById("modalContent");

  // Get the toggle button element
  var btn = document.getElementById("toggle-myModal");
  btn.textContent = modalVisible ? "Show Game Rules" : "Hide Game Rules";

  // Get the image and set its source
  var img = document.getElementById("modalImage");
  img.src = "assets/game.jpeg";

  // Toggle the modal's visibility
  modalVisible = !modalVisible;

  // Update the display property based on visibility
  modalContent.style.display = modalVisible ? "block" : "none";
}

//* ------ Selectors ------- */
const selectionArticle = document.querySelector(".selection");

// //? Images
// const rockImg = document.getElementById("rock");
// const paperImg = document.getElementById("paper");
// const scissorsImg = document.getElementById("scissors");

//? divs of the selected elements
const yourChoiceDiv = document.getElementById("your-choice");
const pcChoiceDiv = document.getElementById("pc-choice");

//? message
const messagePar = document.querySelector(".message");
//? Score
const scoreCardSection = document.querySelector(".score-card");
const pcScoreSpan = document.getElementById("pc-score");
const userScoreSpan = document.getElementById("your-score");

//* ------- Variables ------- */
// let image = document.createElement("img");
let userSelectImg = document.createElement("img");
let pcSelectImg = document.createElement("img");
//? Define Colors
const DRAW = "#ffc538";
const LOST = "#fb778b";
const WIN = "#5ab7ac";

//* ------- Event Listeners ------- */
selectionArticle.addEventListener("click", (e) => {
  // console.log(e.target.id)
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
    createPcSelection();
    calculateResult();
  }
});

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissors"];
  const pcRandom = pcArr[Math.floor(Math.random() * 3)];
  pcSelectImg.src = `./assets/${pcRandom}.png`;
  pcSelectImg.alt = pcRandom;
  pcChoiceDiv.appendChild(pcSelectImg);
};

const calculateResult = () => {
  // console.log(userSelectImg.alt);
  // console.log(pcSelectImg.alt);

  //? Case:Draw
  if (userSelectImg.alt === pcSelectImg.alt) {
    draw(userSelectImg.alt, pcSelectImg.alt);
  } else {
    switch (userSelectImg.alt) {
      case "paper":
        if (pcSelectImg.alt === "rock") {
          userWins(userSelectImg.alt, pcSelectImg.alt);
        } else {
          pcWins(userSelectImg.alt, pcSelectImg.alt);
        }
        break;
      case "scissors":
        if (pcSelectImg.alt === "paper") {
          userWins(userSelectImg.alt, pcSelectImg.alt);
        } else {
          pcWins(userSelectImg.alt, pcSelectImg.alt);
        }
        break;
      case "rock":
        if (pcSelectImg.alt === "scissors") {
          userWins(userSelectImg.alt, pcSelectImg.alt);
        } else {
          pcWins(userSelectImg.alt, pcSelectImg.alt);
        }
        break;

      default:
        break;
    }
  }
};

const draw = (userChoice, pcChoice) => {
  // console.log(`It's a draw! ${userChoice} versus ${pcChoice}`);
  messagePar.textContent = `It's a draw! ${userChoice.toUpperCase()} versus ${pcChoice.toUpperCase()}`;
  scoreCardSection.style.color = DRAW;
  messagePar.style.backgroundColor = DRAW;
};
const userWins = (userChoice, pcChoice) => {
  // console.log(`You Win! ${userChoice} beats ${pcChoice}`);
  messagePar.textContent = `You Win! ${userChoice.toUpperCase()} beats ${pcChoice.toUpperCase()}`;
  scoreCardSection.style.color = WIN;
  messagePar.style.backgroundColor = WIN;
  userScoreSpan.textContent++;
};
const pcWins = (userChoice, pcChoice) => {
  // console.log(`You Lost! ${userChoice} is beaten by ${pcChoice}`);
  messagePar.textContent = `You Lost! ${userChoice.toUpperCase()} is beaten by ${pcChoice.toUpperCase()}`;
  scoreCardSection.style.color = LOST;
  messagePar.style.backgroundColor = LOST;
  pcScoreSpan.textContent++;
};
// rockImg.addEventListener("click", () => {
//   image.src = "./assets/rock.png";
//   image.alt = "rock";
//   yourChoiceDiv.appendChild(image);

//   //? innerHTML
//   // yourChoiceDiv.innerHTML = `<img src="./assets/rock.png" alt="rock">`
// });
// paperImg.addEventListener("click", () => {
//   image.src = "./assets/paper.png";
//   image.alt = "paper";
//   yourChoiceDiv.appendChild(image);
// });
// scissorsImg.addEventListener("click", () => {
//   image.src = "./assets/scissors.png";
//   image.alt = "scissors";
//   yourChoiceDiv.appendChild(image);
// });
//* ------- Functions ------- */
