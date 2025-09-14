let ws = new WebSocket("wss://sose-z1oj.onrender.com/:443");

let controllTD = document.querySelector('.controllTD') ;
controllTD.addEventListener('input', (event) => {
  ws.send(JSON.stringify({ 'slider1': controllTD.value / 100 }));
}, false);

let controllTD2 = document.querySelector('.controllTD2') ;
controllTD2.addEventListener('input', (event) => {
  ws.send(JSON.stringify({ 'slider2': controllTD2.value / 100 }));
}, false);

let controllTD3 = document.querySelector('.controllTD3') ;
controllTD3.addEventListener('input', (event) => {
  ws.send(JSON.stringify({ 'text': controllTD3.value }));
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
