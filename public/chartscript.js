(function(){  
    const socket = io.connect();
    chartid = 1000;
    socket.emit('chart-id',{
      chartid:chartid
    })

    socket.on('plot-chart',data=>{
      Xtime.push(Date.now())
      YData.push(data)
      Chart.update()
    })
})();

 