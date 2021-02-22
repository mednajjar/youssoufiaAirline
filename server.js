const http = require('http');
const app = require('./app')
require('dotenv').config();
const port = process.env.PORT | process.env.PORT_ACCESS

app.set(port)
const server = http.createServer(app);


server.listen(port, ()=>{
    console.log('server listening on port: '+port)
})
