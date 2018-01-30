function shuffles(){
    var array = [1,2,3,4,5,6,7,8,9];
    var i =0;
    var j = 0;
    var temp = null;

    for(i =array.length-1;i>0;i-=1){
        j = Math.floor(Math.random()*(i+1));
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    } 
    console.log(array);
} 

function draws(points,array){

    points++;
    if (points>array.length){
        points = 0;
    }
    console.log(array[points]);
    return points;

}
