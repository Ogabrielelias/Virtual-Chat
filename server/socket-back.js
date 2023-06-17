import 'dotenv/config.js'
import io from './server.js'
import cadastro from './src/events/cadastro.js'
import criarChat from './src/events/criarChat.js'
import editarUsuario from './src/events/editarUsuario.js'
import entrarChat from './src/events/entrarChat.js'
import enviarMenssagem from './src/events/enviarMenssagem.js'
import listarChats from './src/events/listarChats.js'
import listarMenssagens from './src/events/listarMenssagens.js'
import listarUsuario from './src/events/listarUsuario.js'
import login from './src/events/login.js'
import autorizarUsuario from './src/middlewares/autorizarUsuario.js'
import negarUsuario from './src/middlewares/negarUsuario.js'

const nspConversa = io.of('/conversas')
const nspRegUser = io.of('/registrarUsuario')


nspConversa.use(autorizarUsuario)
nspConversa.on('connection',(socket)=>{
    editarUsuario(socket,io)
    listarUsuario(socket,io)
    criarChat(socket,io)
    listarChats(socket,io)
    entrarChat(socket,io)
    enviarMenssagem(socket,io)
    listarMenssagens(socket,io)
})

nspRegUser.use(negarUsuario)
nspRegUser.on('connection',(socket)=>{
    cadastro(socket,io)
})

io.use(negarUsuario)
io.on('connection',(socket)=>{
    login(socket,io)
})
