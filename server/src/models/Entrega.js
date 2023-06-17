import mongoose from "mongoose";

const entregaSchema = new mongoose.Schema(
    {
        id:{ type:String },
        loja:{ type:mongoose.Schema.Types.ObjectId, ref:'lojas', required:true },
        data:{ type:String, requires:true},
        endereco: { type:String, requires:true},
        contatoCliente: { type:String, requires:true},
        descricao: { type:String }
    }
)

const entregas = mongoose.model('entregas',entregaSchema)

export default entregas