import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        id:{ type: String },
        nome:{ type:String, required:true },
        whatsapp:{ type:String, required:true },
        email:{ type:String, required:true },
        senha:{ type:String, required:true },
        salSenha:{ type:String, required:true},
        isAdm:{ type:Boolean ,default:false},
        isLoja:{ type:Boolean, default:false},
        isFuncionario:{ type:Boolean, default:false}
    }
)

const usuarios = mongoose.model('usuarios', usuarioSchema)

export default usuarios

