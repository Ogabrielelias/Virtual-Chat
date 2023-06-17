import http from 'http'
import { Server } from 'socket.io'
import app from "./src/app.js"

// const http = require("http")
// const port = 5000

// const rotas = {
//     '/' : 'curso Node',
//     '/usuario' : 'usuarios aqui'
// }

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type':'text/plain'})
//     res.end(rotas[req.url])
// })

// server.listen(port,()=>{
//     console.log(`Servidor porta: ${port}`)
// })

const port = process.env.PORT || 5000

const serverHttp = http.createServer(app)

serverHttp.listen(port,()=>{
     console.log(`Servidor conectado na porta: ${port}`)
 })

 const io = new Server(serverHttp, {
    cors: {
      origin: ["http://192.168.0.128:3000","http://localhost:3000"]
    }
  })

export default io
