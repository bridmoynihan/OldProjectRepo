function Queue(){
    this.queue = [];
}

Queue.prototype.enqueue = function(elt){
    return this.queue.push(elt);
}

Queue.prototype.dequeue = function(){
    return this.queue.shift();
}

Queue.prototype.size = function(){
    return this.queue.length;
}

Queue.prototype.peak = function(){
    return (this.queue[0] !== null) ? this.queue[0] : null;
}

//For in auction when player has bid
//Keeps the player in the queue but moves them to the end
Queue.prototype.endTurn = function(){
    var elt = this.queue.dequeue();
    return this.queue.enqueue(elt);
}