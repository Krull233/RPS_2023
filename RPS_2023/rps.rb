# Randomly picks and returns Rock, Paper, or Scissors
def getComputerChoice()
  choices = ["rock", "paper", "scissors"]
  random = choices.sample
  puts "Computer chose " + random
  random
end

# Plays a single round between the player and the computer
def oneRound(playerSelection, computerSelection)
  if playerSelection == "rock" && computerSelection == "scissors"
    puts "Player Wins!"
    "playerwins"
  elsif playerSelection == "scissors" && computerSelection == "paper"
    puts "Player Wins!"
    "playerwins"
  elsif playerSelection == "paper" && computerSelection == "rock"
    puts "Player Wins!"
    "playerwins"
  elsif playerSelection == computerSelection
    puts "It's a tie!"
    "tie"
  else
    puts "Computer Wins!"
    "computerwins"
  end
end

# Plays a five round game of R.P.S. 
def game()
  playerScore = 0
  compScore = 0
  round = 0

  while round < 5
    print "Choose your weapon! "
    weapon = gets.chomp.downcase
    result = oneRound(weapon, getComputerChoice()) 

    if result == "playerwins"
      playerScore += 1
    elsif result == "computerwins"
      compScore += 1
    end
    round += 1
    
  end

  if playerScore > compScore
    puts "Final result: Player wins with score of #{playerScore}"
  elsif compScore > playerScore
    puts "Final result: Computer wins with score of #{compScore}"
  else
    puts "Final result: No winner"
  end
end

game()
