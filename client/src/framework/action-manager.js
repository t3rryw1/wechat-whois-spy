/**
 * Created by terrywang on 2017/2/12.
 */
var actionMap = require("./actions");

var ActionManager = function () {
    this.status = actionMap.room.initState;
    this.actionCallbackMap = {};
};

ActionManager.prototype.registerCallback = function (action, callback) {
    this.actionCallbackMap[action] = this.actionCallbackMap[action] || [];
    return this.actionCallbackMap[action].push(callback) - 1;

};

ActionManager.prototype.unregisterCallback = function (action, callbackId) {
    this.actionCallbackMap[action] = this.actionCallbackMap[action] || [];
    this.actionCallbackMap[action].splice(callbackId, 1);
    return this.actionCallbackMap.length;
};

ActionManager.prototype.triggerAction = function (action, data) {
    if (!this.actionCallbackMap[action]) {
        console.error(action + " not registered");
        return;
    }
    if (!actionMap.room.status[this.status]) {
        console.error(this.status + " not valid");
        return;
    }

    if (!actionMap.room.status[this.status][action]) {
        console.error(action + " is not allowed in current state " + this.status);
        return;
    }

    //call all callbacks and if they all return true
    if (this.actionCallbackMap[action].every(function (callback) {
            return callback(data);
        })) {

        //change state.
        this.status = actionMap.room.status[this.status][action];
    }

};

module.exports = ActionManager;
