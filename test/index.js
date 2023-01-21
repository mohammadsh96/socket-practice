const app =require('express')()
const port = 3000
const http =require('http').Server(app)
const ioServer = require('socket.io')(http)


ioServer.on('connection', (socket) => {
    console.log('connected ', socket.id)



    socket.on('online',(payload)=>{
          console.log(payload);
    })

    socket.on('message',(payload)=>{
        
        sendMessage(payload)
    })
    
})

function sendMessage(payload){

    ioServer.emit('messageTo',payload.message)
}
app.get('/',(req,res)=>{
    res.send('welcome  home')
})

app.get('/sendToAll',(req,res)=>{
    ioServer.emit('sendToAll')
    res.send('nothing')

})
app.get('/message',()=>{
    ioServer.on('message',(payload)=>{
        
        sendMessage(payload)
    })
})

http.listen(port ,()=>{
    console.log('server listening on port' +": " +port);
})