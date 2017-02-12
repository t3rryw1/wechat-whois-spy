/**
 * Created by terrywang on 2017/2/9.
 */
var Room = require("../models/room");

var RoomRepo = function(){}

RoomRepo.getInstance = function(){
    if(!this.instance){
        this.instance = new RoomRepo();
    }
    return this.instance;
}

RoomRepo.prototype.getCurrentRoom = function(){
    //TODO: check localstorage
    //if not, get it from web
    return new Room();
}


RoomRepo.prototype.joinRoom = function(roomCode){
    //TODO: implement
}

RoomRepo.prototype.leaveRoom = function(){
    //TODO: implement
}

module.exports = RoomRepo;