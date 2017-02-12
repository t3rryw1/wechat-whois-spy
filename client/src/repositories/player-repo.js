/**
 * Created by terrywang on 2017/2/9.
 */
var Player = require("../models/player");

var PlayerRepo = function(){
}

PlayerRepo.getInstance = function(){
    if(!this.instance){
        this.instance = new PlayerRepo();
    }
    return this.instance;
}

PlayerRepo.prototype.getCurrentPlayer = function(){
    //TODO: check localstorage
    //if not, get it from web
    return new Player();
}


module.exports = PlayerRepo;