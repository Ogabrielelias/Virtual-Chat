import { socket } from '../socket';

const cadastrarChat = (chat) => {
    socket.emit("criar_chat", chat);
    socket.emit('listar_chats', chat.email )

}

export default cadastrarChat