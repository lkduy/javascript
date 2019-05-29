var Mouse = function(color){
    this.color = color;
    this.dead = false;
};

Mouse.prototype.die = function(){
    this.dead = true;
};

module.exports = Mouse;