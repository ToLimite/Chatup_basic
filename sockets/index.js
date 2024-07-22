const express = require('express')
const app = express()
const port = 3000

var server = app.listen(8082)
var io = require('socket.io').listen(server);

io.on('connection', (socket) => {
  console.log('socket 连接成功！');
  //接收信息
  socket.on('message', data =>{
    console.log(data);
    // 广播消息
    socket.broadcast.emit('gbmsg', data);
  })
});



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})