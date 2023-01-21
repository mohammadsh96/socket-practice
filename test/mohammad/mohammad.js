const io = require('socket.io-client');
let host = `http://localhost:3000`;

const systemConnection = io.connect(host);


systemConnection.emit('online','mohammad is online')
systemConnection.on('sendToAll',()=>{
    console.log('message received from server');
})

systemConnection.on('messageTo',(payload)=>{
    console.log(payload);
})
