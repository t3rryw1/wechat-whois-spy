/**
 * Created by terrywang on 2017/2/9.
 */
var Game = require("../models/game");

var GameRepo = function(){
}

GameRepo.getInstance = function(){
    if(!this.instance){
        this.instance = new GameRepo();
    }
    return this.instance;
}

GameRepo.prototype.getCurrentGame = function(){
    //TODO: check localstorage
    //if not, get it from web
    return new Game();
}

GameRepo.prototype.startGame = function(){
    //create new game object based on current game object
}

GameRepo.prototype.endGame = function(){
    //TODO: implement

}

module.exports = GameRepo;