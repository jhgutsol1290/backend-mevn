import { Router } from 'express'
import { 
    nuevaNota,
    mostrarNotas,
    mostrarNota,
    editarNota,
    eliminarNota
} from '../controllers/notas.controller'

const router = Router()

// Crear nueva nota
router.post('/nueva-nota', nuevaNota)

// todas las notas
router.get('/nota', mostrarNotas)

// mostrar una nota
router.get('/nota/:id', mostrarNota)

// editar una nota
router.put('/nota/:id', editarNota)

// eliminar una nota
router.delete('/nota/:id', eliminarNota)

module.exports = router