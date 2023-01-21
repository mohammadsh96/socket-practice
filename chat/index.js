const express =require('express')
const app = express()
const port = 3001
const http =require('http').Server(app)
const ioServer = require('socket.io')(http)

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.get("/" ,(req,res)=>{
    res.render( './index.html')
})


ioServer.on('connection',(socket)=>{
    console.log("user connected with id : "+socket.id);


    socket.on('message',(message)=>{
        console.log(message);
        socket.broadcast.emit('message',message)
    })
})


http.listen(port ,()=>{
    console.log('server listening on port' +": " +port);
})
//views