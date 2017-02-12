/**
 * Created by terrywang on 2017/2/9.
 */
// var Base = require('../src/models/base.js');
// var base1 = new Base();
// console.log(base1);

var GameRepo = require('../src/repositories/game-repo.js');
var repo = GameRepo.getInstance();

var game = repo.getCurrentGame();
console.log(game.toString());
