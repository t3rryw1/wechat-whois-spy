/**
 * Created by terrywang on 2017/2/9.
 */
var BaseModel = require('./base.js');

var PlayerModel = function (displayName,
                            avatar,
                            status,
                            messages) {
    this.displayName = displayName;
    this.avatar = avatar;
    this.status = status ;
    this.messages = messages || [];
}

PlayerModel.prototype = new BaseModel();

PlayerModel.prototype.toString = function () {
    return "\nPlayer: "
        + "\n\tname: " + this.displayName
        + "\n\tavatar: " + this.avatar
        + "\n\tstatus: " + this.status
        + "\n\tmessages: " + this.messages
}


module.exports = PlayerModel;