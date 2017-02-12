/**
 * Created by terrywang on 2017/2/9.
 */
var BaseModel = require('./base.js');

var GameModel = function (players,status) {
    this.players = players || [];
    this.status = status;
}

GameModel.prototype = new BaseModel();

GameModel.prototype.toString = function () {
    return "\nGame: "
        + "\n\tplayers: " + this.players.toString().replace(/\n/g,"\n\t")
        + "\n\tstatus: " + this.status;
    +"\n";
}

GameModel.prototype.isRunning = function(){
    //TODO: implement
}

module.exports = GameModel;