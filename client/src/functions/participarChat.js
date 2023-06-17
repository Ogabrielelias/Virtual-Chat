import { socket } from '../socket';

const participarChat = (dados) => {
    socket.emit("entrar_chat", dados);
}

export default participarChat