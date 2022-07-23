const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chartplot.html');
});
app.get('/senddata', (req, res) => {
  res.sendFile(__dirname + '/chartdata.html');
});

io.on('connection', (socket) => {
  socket.on("chart-id", data=>{
    socket.join(data.chartid)
  })
  socket.on("chart-data", data =>{
    socket.in(1000).emit("plot-chart",data.value);
  })

});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});