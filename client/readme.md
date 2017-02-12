##Client side of the game

### Framework

The game is a finite state machine.

states and transitions are defined in framework/actions.js

action-manager.js is used to manage local states, add state-related callbacks (for page controllers) and to move between different states. 

ws-manager.js is for manage web socket, including connect, close, send and receive messages and trigger action manager.