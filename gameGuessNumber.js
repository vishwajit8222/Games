// guessing number game
let gameNum = 25;
let userNum = prompt("Enter a number :");
while(userNum != gameNum){
   userNum = prompt("You enter wrong number. Guess again:")
}
console.log("congratulation, you guess right number.")