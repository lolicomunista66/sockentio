let io = require("socket.io-client")
let socket = io.connect("http://localhost:3666");

player = {
    'neime' : 'loli comunista',
    'yo' : 19
}

socket.emit('savePlayer', (player))

socket.on('connected', (playerUpdate) => {
    player = playerUpdate
    console.log(player)
})