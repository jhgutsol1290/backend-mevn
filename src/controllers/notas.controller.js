import Nota from '../models/Nota'

const ctrl = {}

// Agregar nueva nota
ctrl.nuevaNota = async (req, res) => {
    try {
        
        const notaDB = await Nota.create(req.body)
        return res.json(notaDB)

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        })

    }
}

// Mostrar todas las notas
ctrl.mostrarNotas = async (req, res) => {
    try {
        
        const notas = await Nota.find({})
        return res.json(notas)

    } catch (error) {
        
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        })

    }
}

// Mostrar sólo una nota
ctrl.mostrarNota = async (req, res) => {
    const { id } = req.params

    try {
        
        const nota = await Nota.findOne({_id: id})
        if(!nota) {
            return res.status(404).json({
                mensaje: 'Nota no existe'
            })
        }
        return res.json(nota)

    } catch (error) {
         
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        })

    }
}

// Editar una nota
ctrl.editarNota = async (req, res) => {
    const { id } = req.params

    try {
        
        const nota = await Nota.findByIdAndUpdate(id, req.body, {
            new: true
        })
        return res.json({
            mensaje: 'Nota actualizada correctamente',
            nota
        })

    } catch (error) {
               
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        })

    }
}

// Eliminar una nota
ctrl.eliminarNota = async (req, res) => {
    const { id } = req.params

    try {
        
        await Nota.findByIdAndDelete(id)
        return res.json({
            mensaje: 'Nota eliminada correctamente'
        })

    } catch (error) {
               
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        })

    }
}


module.exports = ctrl