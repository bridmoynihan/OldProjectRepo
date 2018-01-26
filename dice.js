//first dice
var dice = {
  sides: 6,
  roll: function () {
    // + 1 prevents 0 from being rolled
    var ranNum = Math.floor(Math.random() * this.sides) + 1;
    return ranNum;
  }
}
//second dice 
var dice2 = {
  sides: 6,
  roll: function () {
    var ranNum2 = Math.floor(Math.random() * this.sides) + 1;
    return ranNum2;
  }
}
//printing the number on the screen
function printNum(number1) {
  var dicePosition1 = document.getElementById('dicePosition1');
  dicePosition1.innerHTML = number1;
}
//printing the second number to screen
function printNum2(number2) {
  var dicePosition2 = document.getElementById('dicePosition2');
  dicePosition2.innerHTML = number2;
}
//printing the total value on the screen
function printValue(number1, number2){
  var Value = document.getElementById('value');
  var val = number1 + number2;
  value.innerHTML = val;
  return val;
}

function movePlayer(playerID, spacesMoved) {
  
}

//define button 
var button = document.getElementById('button');

//button events on click
button.onclick = function() {
  var randNum1 = dice.roll();
  var randNum2 = dice2.roll();
  printNum(randNum1);
  printNum2(randNum2);
  var movesForward = printValue(randNum1, randNum2);
  movePlayer(1, movesForwar);
  //The 1 just above is the placeholder for the player's ID for the time being
};

