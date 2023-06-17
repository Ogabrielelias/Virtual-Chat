// import db from './dbConnect.js'

// const userCollection = db.collection('usuarios')
// const msgCollection = db.collection('menssagens')

// export { userCollection, msgCollection }

import db from "./dbConnect.js";

let usuariosDb = db.usuarios;
let chatsDb = db.chats;

let userId = 1;
let msgId = 1;

const encontrarMenssagensChat = (chat) =>{
  return chat[0].menssagens
}

const cadastrarMenssagem = (dados) =>{
  msgId += 1
  const conversa = chatsDb.filter((chat)=> chat.id==dados.chat.id)[0]

  conversa.menssagens = [...conversa.menssagens, {id:msgId, texto:dados.texto, data:dados.data, usuario:dados.user}]

  return conversa

}

const encontrarChats = (email) => {

  const filterEmail = (user) => user.email == email;

  const usuario = usuariosDb.filter(filterEmail)[0];
   if(usuario){
  const listaChats = chatsDb.filter(
     (chat) => chat.usuarios.filter((user) => user.id == usuario.id)[0]
     );
     return listaChats;
}
   return false
};

const participarChat = (id, usuario) => {
  const chat = encontrarChatById(id);

  if (validaUsuarioNoChat(chat[0], usuario)) {
    if (chat.length > 0) {
      chat[0].usuarios = [...chat[0].usuarios, usuario];

      return true;
    }
  }
  return false;
};

const validaUsuarioNoChat = (chat, usuario) => {
   if(chat){
  const usuarioNoChat = chat.usuarios.filter((user) => user.id === usuario.id)[0];

  if (usuarioNoChat) {
    return false;
  }}
  return true;
};

const encontrarChatById = (id) => {
  const chat = chatsDb.filter((chat) => {
    return id === chat.id;
  });

  return chat;
};

const cadastrarChat = (id, nome, usuario) => {
  const newChat = {id: id, nome: nome, usuarios: [usuario], menssagens: []};
  chatsDb = [...chatsDb, newChat];

  return newChat;
};

const encontrarUsuarioTelefone = (telefone) => {
  const filterTelefone = (user) => user.telefone == telefone;

  //return userCollection.findOne({email:email})
  return usuariosDb.filter(filterTelefone)[0];
};

const encontrarUsuario = (email) => {
  const filterEmail = (user) => user.email == email;

  //return userCollection.findOne({email:email})
  return usuariosDb.filter(filterEmail)[0];
};

const cadastrarUsuario = (dados) => {
  //return userCollection.insertOne(dados)

  userId = userId + 1;
  const newDados = {...dados, id: userId};
  usuariosDb = [...usuariosDb, newDados];

  return usuariosDb;
};

const editarUsuarioDb = (id, dados) => {
  let usuario = usuariosDb.filter((user) => {
    return user.id === id;
  })[0];
  usuario = {
    ...usuario,
    telefone: dados.telefone,
    nome: dados.nome,
  };

  const listaChats = chatsDb.filter(
    (chat) => chat.usuarios.filter((user) => user.id == usuario.id)[0]
  );

  if (listaChats.length > 0) {
    listaChats.map(
      (chat) =>
        (chat.usuarios = chat.usuarios.map((user) => {
          return user.id === usuario.id ? usuario : user;
        }))
    );
  }

  const newUsersDb = usuariosDb.map((user) => {
    return user.id === usuario.id ? usuario : user;
  });
  usuariosDb = newUsersDb;
  //return await usuarios.findByIdAndUpdate(id,dados)
  return usuario;
};

const excluiUsuario = (id) => {
  // return await usuarios.findOneAndDelete({_id:id})
};

export {
  cadastrarChat, cadastrarMenssagem, cadastrarUsuario,
  editarUsuarioDb,
  encontrarChatById,
  encontrarChats, encontrarMenssagensChat, encontrarUsuario,
  encontrarUsuarioTelefone,
  excluiUsuario,
  participarChat
};

