/**
 * Created by terrywang on 2017/2/9.
 */
// var Base = require('../src/models/base.js');
// var base1 = new Base();
// console.log(base1);

var Player = require('../src/models/player.js');
var player1 = new Player("DoctorX","avatar1");
var player2 = new Player("Magneto","avatar2");
console.log(player1.toString());
console.log(player2.toString());
//
//
var Game = require('../src/models/game.js')
var game1 = new Game([player1,player2],"started");
console.log(game1.toString());
