/**
 * Created by terrywang on 2017/2/9.
 */
var BaseModel = require('./base.js');

var RoomModel = function (players,status) {
    this.games = [];
    this.players = players;
    this.status = status;
}

RoomModel.prototype = new BaseModel();

RoomModel.prototype.toString = function () {
    return "\nRoom: "
        + "\n\tplayers: " + this.players.toString().replace(/\n/g,"\n\t")
        + "\n\tstatus: " + this.status;
    +"\n";
}

module.exports = RoomModel;