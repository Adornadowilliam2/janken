let hardmode = document.getElementById("hardmode");
let difficulty = false;
let imgAiPick = document.getElementById("ai-pick");
let player = document.getElementById("player-pick");
const aiPicks = ["rock", "paper", "scissor"];
let shuffleInterval; // Declare this variable outside the functions to access it later

hardmode.addEventListener("click", function () {
  difficulty = true;
  alert("Activated");
  console.log(difficulty);
  imgAiPick.src = "";
  player.src = "";
});

function shufflePicks() {
  shuffleInterval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * aiPicks.length);
    imgAiPick.src = `media/${aiPicks[randomIndex]}.png`;
    player.src = `media/${aiPicks[randomIndex]}.png`;
  }, 500);
}

function play(playerPick) {
  shufflePicks();
  let aiPick;

  if (!difficulty) {
    const random = Math.floor(Math.random() * aiPicks.length);
    aiPick = aiPicks[random];
  } else {
    switch (playerPick) {
      case "rock":
        aiPick = "paper";
        break;
      case "paper":
        aiPick = "scissor";
        break;
      case "scissor":
        aiPick = "rock";
        break;
    }
  }

  setTimeout(() => {
    clearInterval(shuffleInterval);
    imgAiPick.src = `media/${aiPick}.png`;
    player.src = `media/${playerPick}.png`;
  }, 3000);

  let resultMessage;
  if (playerPick === aiPick) {
    resultMessage = "It's a tie!";
  } else if (
    (playerPick === "rock" && aiPick === "scissor") ||
    (playerPick === "paper" && aiPick === "rock") ||
    (playerPick === "scissor" && aiPick === "paper")
  ) {
    resultMessage = "You win!";
  } else {
    resultMessage = "AI wins!";
  }

  setTimeout(() => {
    document.getElementById("result-message").textContent = resultMessage;
  }, 3000);
}
