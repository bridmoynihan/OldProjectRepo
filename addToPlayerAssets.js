function addToPlayerAssets(userObj, propertyObj){
    name = propertyObj.Name;
    type = propertyObj.Type;
    colour = propertyObj.Colour;
    userObj.assets[type] = name;
    //this is probably wrong
    //need to find a way to update colours in userObj
    userObj.colour[colour] += 1;
    //test
    document.write(userObj.assets);
    //could include changes to owned tag but probably already done in Buy function

}
