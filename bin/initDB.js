'use strict';
const app = require('../app')
const Tarea = require('../models/Tarea');
const connection = require('../lib/connectMongoose');

main().catch(err => console.log('Hubo un error', err));

async function main() {

  // inicializamos colección de tareas
  await initTareas();

  connection.close();

}

async function initTareas() {
  // borrar todas las tareas
  const deleted = await Tarea.deleteMany();
  console.log(`Eliminados ${deleted.deletedCount} tareas.`);

  // crear tareas iniciales
  const inserted = await Tarea.insertMany([
    { titulo: 'Deberes Matemáticas',
      descripcion: 'Página 122 ejercicio 2',
      estado: 'Pendiente',
      fecha: Date.now()  
    },
    { titulo: 'Deberes Lenguaje',
      descripcion: 'Página 12 ejercicio 2',
      estado: 'Pendiente',
      fecha: Date.now()  
    },
    { titulo: 'Deberes FyQ',
      descripcion: 'Página 122 ejercicio 1 y 2',
      estado: 'En progreso',
      fecha: Date.now()  
    },
    { titulo: 'Deberes Ingles',
      descripcion: 'Página 122 ejercicio 2',
      estado: 'Cancelada',
      fecha: Date.now()  
    },
  ]);
  console.log(`Creados ${inserted.length} tareas`);
}