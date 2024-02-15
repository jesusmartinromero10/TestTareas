const mongoose=require('mongoose');

//defino el esquema de las tareas

const tareaSchema = mongoose.Schema({

    titulo: String,
    descripcion:String,
    estado:{ type: String, enum: ['Pendiente', 'En progreso', 'Completada', 'Cancelada'] },
    fecha:{ type: Date, default: Date.now }

})

//creo modelo de tarea

const Tarea= mongoose.model('Tarea', tareaSchema)
//exporto el modelo

module.exports = Tarea;