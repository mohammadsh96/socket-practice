const io = require('socket.io-client');
let host = `http://localhost:3000`;

const systemConnection = io.connect(host);


systemConnection.emit('online','ahmad is online')
systemConnection.on('sendToAll',()=>{
    console.log('message received from server');
})

setInterval(() => {
        systemConnection.emit('message',{ to:"mohammad" , message:" hello mohammad "})
}, 2000);