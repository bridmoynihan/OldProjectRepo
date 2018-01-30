userObj = {
  "player_id":"",
  "capital": 1500,
  "name":"",
  "user_rolls":0,
  "double":false,//var is updated when user rolls a double, and used so user doesn't
                 //have another go if they roll a double in jail
                 //they would normally have another go when a double is
                 //rolled outside of jail
                 //maybe a turn() function can be used with the doubleCount()
                 //function to check for doubles and update this var
  "assets":{objects placed here},
  "jail_card":false,
  "jail":{"jail_tag":false, "jail_roll":0},//jail_roll is used when user gets to 3 turns in jail
  "colour":{
    "brown":0, "light-blue":0,"pink":0, "orange":0,"red":0,"green":0, "blue":0}
}

function jail() {
   var jail_time = 3;//no. of turns allowed in jail
   var pay_to_out = 50; //var to get out of jail or to pay 50 quid to get out early
   var reset = 0;//var to reset jail roll var to 0 for/if next time user's in jail
   var use_jail_card = false; //var to check if user has used jail card

   if(userObj.jail.jail_flag == true){
       //statement to check if user has reached 3 turns in jail
       //and has to pay 50 quid
       if(userObj.jail.jail_roll = jail_time){
           userObj.jail.jail_tag = false;
           userObj.double = false;
           userObj.jail.jail_roll = reset;
           userObj.capital -= pay_to_out;
       }
       else{
           //User either uses card and card is returned to appropriate deck
           //and user jail variables are reset to default OR doesn't use it 
           //and their current dice roll state is processed as below.
           if(userObj.jail.double = true){
                userObj.jail.jail_tag = false;
                userObj.double = false;
                userObj.jail.jail_roll = reset;
                use_jail_card = false;
           }
           else{
                //user will enter this branch upon first arrival in jail
                //if user doesn't roll a double, doesn't have or use a
                //'get out of jail card' or doesn't pay 50 quid to get out'
                userObj.jail.jail_tag = true;
                userObj.double = false;
                userObj.jail.jail_roll += 1;
                use_jail_card = true;
           }
           //if user owns a jail card
           //user can either use jail card
           //or not and their jail vars are updated
           if(use_jail_card = true){
                if(userObj.jail_card = true){
                    //alert("Do you want to use your 'Get out of jail card'?");
                    $(#jail_card).html('<div>Use "Get out of jail card"?</div>');
                    $(#jail_card).html('<div id="yes">Yes</div>');
                    $(#jail_card).html('<div id="no">No</div>');
                    //user clicks on 'yes' to use jail card
                    //and all their userObj vars will be reset
                    //I don't know what is the P.O.A for buying a jail card
                    //I assume that will be in another function where money is deducted
                    //from user capital and there is an auction
                    //Also the jail card will be returned to its appropriate deck
                    //and the shuffle function is called
                    $(#yes).click(function(event){
                        userObj.jail.jail_tag = false;
                        userObj.double = false;
                        userObj.jail.jail_roll = reset;
                        jail_card_use = true;//so that user won't enter statement below
                        chance.shuffles();//to shuffle chance/community chest deck with card
                    });
                    //user can click no to not use the jail card they own
                    $(#no).click(function(event){
                        //Remove questions and possible answers to use the jail card
                        var element = document.getElementById(#jail_card);
                        element.parentNode.removeChild(element);
                        use_jail_card = false;//user will enter if statement below
                    })
                    //This could be changed^^ with regard to the html elements like the divs.
                }
           }
       }
   }   

}