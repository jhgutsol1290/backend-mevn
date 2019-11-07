import { Schema, model } from 'mongoose'

const notaSchema = new Schema({
    nombre: {
        type: String, 
        required: [true, 'Nombre obligatorio']
    },
    descripcion: String,
    usuarioID: String,
    date: {
        type: Date,
        default: Date.now
    },
    activo: {
        type: Boolean,
        default: true
    }
})

const Nota = model('Nota', notaSchema)

export default Nota