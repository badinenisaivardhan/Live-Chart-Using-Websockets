(function(){  
    const socket = io.connect();    
    document.querySelector("#submit-button").addEventListener("click",()=>{
        var number = document.getElementById("input").value 
        socket.emit('chart-data',{
           value : number
         });
        document.getElementById('sentnumbers').innerHTML += `<ul>${number}</ul>`;
       }) 
})();

 