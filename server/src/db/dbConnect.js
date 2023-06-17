// import mongoose from "mongoose"

// mongoose.connect("mongodb+srv://<usuario>:<senha>@<Projeto>.mongodb.net/<BancoDeDados>")

// let db = mongoose.connection

const db = {
    usuarios:[
            {
              nome: 'Adm Teste',
              telefone: '11999999999',
              email: 'adm@hotmail.com',
              //senha: '123'
              senha: 'be8cc789ab6b4b328cb0b9231d35e5421a79d5503f67db3659eb95df82cff0c8e11268ecb43fd55f771cf048045f3131b96467e2d7eca1dc8bbdb471e9527456',
              salSenha: '94e6007239154c922a85e69ecadf926f',
              id: 0
            },{
                nome: 'Gabriel Elias Souza de Oliveira',
                telefone: '51996870825',
                email: 'gabrielelias8@hotmail.com',
                senha: 'be8cc789ab6b4b328cb0b9231d35e5421a79d5503f67db3659eb95df82cff0c8e11268ecb43fd55f771cf048045f3131b96467e2d7eca1dc8bbdb471e9527456',
                salSenha: '94e6007239154c922a85e69ecadf926f',
                id: 1
              },
            
        ],
        chats:[
         { id:'asdas',
          nome:'nomechat',
          usuarios:[],
          menssagens:[
            {
            id:0,
            data:'yyyy-MM-dd 00:00:00',
            texto:'menssagem',
            usuario:'{usuario}',
            }
        ]},

      ]
}
 export default db