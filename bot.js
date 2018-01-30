var user = require('./userObject.js');
var prop = require('./properties.js');

function auction(){

    //Ints
    var auctionPrice = 10;
    var amountBidded; //Button with amount bidded

    //Booleans
    var isAuctionOn = true;
    //Setter when player withdraws to set ie to true.
    //Player is dequeued
    var isWithdrawn = false; 
    var endTurn = false;

    //Queue
    var playerCount = new Queue;

    while(isAuctionOn){
        if(playerCount.size == 1){
            alert("You won the auction");
            //Pay auction price
            prop.Events.buy; //Player buys property
            prop.Owner = user.player_id; //Property is given to player

        }else if(isWithdrawn == true){
            alert("You withdrew from the auction");
            playerCount.dequeue();
        }else if(auctionPrice > user.capital){
            alert("You have been withdrawn from the auction");
            playerCount.dequeue();
            isWithdrawn = true;
        }else{
            if(auctionPrice > prop.Price){
                alert("The price is above the original price!");
            }else{
                if(amountBidded == 1){
                    auctionPrice += 1;
                    endTurn = true;
                    playerCount.endTurn();
                }else if(amountBidded == 10){
                    auctionPrice += 10;
                    endTurn = true;
                    playerCount.endTurn();
                }else if(amountBidded == 100){
                    auctionPrice += 100;
                    endTurn = true;
                    playerCount.endTurn();
                }
            }
        }


    }

    
}