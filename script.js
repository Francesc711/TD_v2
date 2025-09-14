let ws = new WebSocket("wss://websocket-m24h.onrender.com/:443");
let id = 2233999;

let controllTD = document.querySelector('.controllTD') ;
controllTD.addEventListener('input', (event) => {
  ws.send(JSON.stringify({ 
  'slider1': controllTD.value / 100,
  'ID': id
}));
}, false);

let controllTD2 = document.querySelector('.controllTD2') ;
controllTD2.addEventListener('input', (event) => {
  ws.send(JSON.stringify({ 
  'slider2': controllTD2.value / 100,
  'ID': id
}));
}, false);

let controllTD3 = document.querySelector('.controllTD3') ;
let sendBtn = document.querySelector('.sendBtn');
sendBtn.addEventListener('click', () => {
  ws.send(JSON.stringify({ 
  'text1': controllTD3.value,
  'ID': id
}));
}, false);

ws.addEventListener('open', (event) => {
  console.log('Socket connection open!');
  // alert('Successfully connected to socket server 🎉');
  ws.send('pong');
});

ws.addEventListener('error', (error) => {
    console.error('Error in the connection', error);
    alert('error connecting socket server', error);
});

ws.addEventListener('close', (event) => {
    console.log('Socket connection closed');
    alert('closing socket server');
});
