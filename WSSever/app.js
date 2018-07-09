const WebSocket = require('ws');
const wsServer = new WebSocket.Server({port:8085});

wsServer.on("connection", webSocket => {
    webSocket.send("this message is from server and is push by server auto");
    webSocket.on("message", message => {
        console.log("recevied meaasge: "+message)
    })
});

setInterval(() => {
    if(wsServer.clients){
        wsServer.clients.forEach(client =>{
        client.send("this is send by Interval");
    })
    }
}, 2000);
