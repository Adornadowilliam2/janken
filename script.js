function play(playerPick) {
    // Generate AI's pick randomly
    const aiPicks = ['rock', 'paper', 'scissor'];
    let aiPick;
    
    // AI always wins
    if (playerPick === 'rock') {
      aiPick = 'paper';
    } else if (playerPick === 'paper') {
      aiPick = 'scissor';
    } else {
      aiPick = 'rock';
    }
    
    // Display player's and AI's picks
    document.getElementById('ai-pick').src = `${aiPick}.png`;
    
    // Determine the result
    let resultMessage;
    if (playerPick === aiPick) {
      resultMessage = "It's a tie!";
    } else {
      resultMessage = 'AI wins!';
    }
    
    // Display the result message
    document.getElementById('result-message').textContent = resultMessage;
  }
  