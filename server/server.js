const express = require('express')
const app = express();
const http = require('http')
const cors = require('cors')
const {Server} = require('socket.io')

//express app:
app.use(cors())

//api key:
/* Example in Node.js */
const axios = require('axios');

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'bc49fe25-8c6e-4cda-92e3-78eec45ad9c7',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});


const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:["GET","POST"]
    }
})

io.on('connection',(socket)=>{
    console.log(`User Connected: ${socket.id}`)
    socket.on('disconnect',()=>{
        console.log('User Disconnect',socket.id)
    })
})

server.listen(3001, ()=>{
    console.log('Server Running..')
})