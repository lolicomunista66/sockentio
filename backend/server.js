let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

players = []

io.on('connection', (socket) => {
  socket.on('savePlayer', (player) => {
    player.id = socket.id
    players.push(player)
    console.log(players)
    socket.emit('connected', (player))
  })


  socket.on('disconnect', () => {
    players.splice(players.indexOf(socket.id), 1)
    console.log(players)
  })

})

http.listen(3666, () => {
  console.log('...666');
})