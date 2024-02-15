const mongoose=require('mongoose');

//defino el esquema de las tareas

const tareaSchema = mongoose.Schema({

    titulo: String,
    descripcion:String,
    estado:{ type: String, enum: ['Pendiente', 'En progreso', 'Completada', 'Cancelada'] },
    fecha:{ type: Date, default: Date.now }

})

// Middleware para validar el campo 'estado' antes de guardar la tarea
tareaSchema.pre('save', function(next) {
    if (!this.isModified('estado')) return next(); // Si 'estado' no ha sido modificado, no hacer nada
    
    if (!['Pendiente', 'En progreso', 'Completada', 'Cancelada'].includes(this.estado)) {
        return next(new Error('Estado no válido solo estan permitidos (Pendiente, En progreso, Completada, Cancelada)'));
    }
    next();
});

// Middleware para validar el campo 'estado' antes de actualizar la tarea
tareaSchema.pre('findOneAndUpdate', function(next) {
    const estado = this.getUpdate().estado; // Obtener el nuevo valor del estado del documento a actualizar
    console.log('estado', estado)
    if (!['Pendiente', 'En progreso', 'Completada', 'Cancelada'].includes(estado)) {
        return next(new Error('Estado no válido solo estan permitidos (Pendiente, En progreso, Completada, Cancelada)'));
    }
    next();
});


//creo modelo de tarea

const Tarea= mongoose.model('Tarea', tareaSchema)
//exporto el modelo

module.exports = Tarea;