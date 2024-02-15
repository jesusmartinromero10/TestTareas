# BackEnd --- 
## Project: Blog Tareas
* Jesús Martín Romero

## How to install in local environment

Get repository
```sh
git clone https://github.com/jesusmartinromero10/TestTareas.git
```

Install dependencies with:
```sh
npm install
```

Install **MongoDB**

* Access to [MongoDB-WebSite](https://www.mongodb.com/)
* Search for "Install Community Edition on _your_platform_ (Linux, Windows, macOS)

**.env** file (sample file: .env.example)
```js
MOGODB_CONNECTION_STR=mongodb: //127.0.0.1:27017/dbtareas

```

Checking MongoDB

* Run NoSQLBooster for MongoDB
* Connect string: `mongodb://localhost:27017` 

## How to run in local environment

Initializating data:
```sh
npm run initDB
# { titulo: 'Deberes Matemáticas',
#      descripcion: 'Página 122 ejercicio 2',
#       estado: 'Pendiente',
#       fecha: Date.now()  
#     },
#     { titulo: 'Deberes Lenguaje',
#       descripcion: 'Página 12 ejercicio 2',
#       estado: 'Pendiente',
#       fecha: Date.now()  
#     },
#     { titulo: 'Deberes FyQ',
#       descripcion: 'Página 122 ejercicio 1 y 2',
#       estado: 'En progreso',
#       fecha: Date.now()  
#     },
#     { titulo: 'Deberes Ingles',
#       descripcion: 'Página 122 ejercicio 2',
#       estado: 'Cancelada',
#       fecha: Date.now()  
#     },
```

Start in development mode:
```sh
npm run dev
```

Result
```log  
> backend@0.0.0 dev
> cross-env DEBUG=backend:* nodemon ./bin/www

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node ./bin/www`
  backend:server Listening on port 3001 +0ms
Connected to MongoDB in dbtareas
```
---------------------------------------------------------------------
#### API Methods

You need a MongoDB data base

The connection is located in .lib/connectMongoose.js

##### GET /api/tareas

Returns all tareas

Ejemplo de formato de traida

```sh
# { titulo: 'Deberes Matemáticas',
#      descripcion: 'Página 122 ejercicio 2',
#       estado: 'Pendiente',
#       fecha: Date.now()  
#     },
#     { titulo: 'Deberes Lenguaje',
#       descripcion: 'Página 12 ejercicio 2',
#       estado: 'Pendiente',
#       fecha: Date.now()  
#     },
#     { titulo: 'Deberes FyQ',
#       descripcion: 'Página 122 ejercicio 1 y 2',
#       estado: 'En progreso',
#       fecha: Date.now()  
#     },
#     { titulo: 'Deberes Ingles',
#       descripcion: 'Página 122 ejercicio 2',
#       estado: 'Cancelada',
#       fecha: Date.now()  
#     },
```

##### GET "/api/tareas/:id  --> Devuelve todos / o la tarea filtrado por su iD.

Returns a tarea filtered by its id.


<!-- TODO -->
{
    "_id": "65cdf51d01e4f22236a22e72",
    "titulo": "deberes fyqqqqqq",
    "estado": "Completada",
    "fecha": "2024-02-15T11:27:25.323Z",
    "__v": 0
}

##### POST "/api/tareas"


Returns a JSON with the tarea inserted in the API.

##### PUT "/api/tareas/:id"

return a JSON with the tarea update.

##### DELETE "/api/tareas/:id"

Confirms delete of the tarea.

---------------------------------------------------------------------







