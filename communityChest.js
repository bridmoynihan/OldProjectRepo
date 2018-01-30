var communityChest= [
    {
        Name: "Bank Error",
        Events: ["generalCollect"], 
        Amount: 200
    },

    {
        Name: "Doctor's Fee",
        Events:["fine"],
        Amount: 50
    },

    {
        Name:"Sale Of Stock",
        Events:["generalStock"],
        Amount: 50
    },

    {
        Name: "Grand Opera Night.",
        Events:["collectFromPlayers"],
        Amount: 50  
    },

    {
        Name: "Holiday Fund.",
        Events:["generalCollect"],
        Amount: 100
    }, 

    {
        Name: "Get Out of Jail Free",
        Events:["addToJailSlot"] 
    },

    {
        Name: "Income tax refund",
        Events:["generalCollect"],
        Amount: 25
    },

    {
        Name: "Go to Jail",
        Events:["advance"]
    },

    {
        Name: "Make street repairs",
        Events:["payToBank"],
        Amount: [40, 115] //40 is per house and 115 is per hotel
    },

    {
        Name: "Birthday",
        Events:["generalCollect"],
        Amount: 10
    },

    {
        Name: "Life Insurance",
        Events:["generalCollect"],
        Amount: 100
    },

    {
        Name: "Pay hospital",
        Events:["fine"],
        Amount: 100
    },

    {
        Name: "Pay School",
        Events:["fine"],
        Amount: 150
    }
]