function doubleCount(RandomNumber, RandomNumber2){
  /* This function compares the dice rolls if 2 of the same number occer
  on the dice, if a double persists for 3 throws the player goes to jail*/
var DoubleNumberCount = 0;

if(RandomNumber == RandomNumber2){
  DoubleNumberCount +=1;
  if DoubleNumberCount == 3{
    Console.log("Go To Jail Function goes here")
  }
}
else{
  DoubleNumberCount = 0;
}
}

 var json = require('./userObject.json');

function jailTag(){
  userObj.jail_tag = true;
  Console.log(userObj);
}
