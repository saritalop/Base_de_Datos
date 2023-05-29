use('motorbike');//consultas
// {}

//mostrar todos los documentos de usuarios
//db.usuarios.find({});

//Para mostrar un documento segun el ID dado
//   db.usuarios.findOne({id_usuario:{$eq:1503}});

//mostrar todos los documentos de clientes
// db.clientes.find({});

//Para mostrar un documento segun el ID dado
//  db.clientes.findOne({id_cliente:{$eq:2003}});

//mostrar todos los documentos de permisos
// db.permisos.find({});

//Para mostrar un documento segun el ID dado
// db.permisos.findOne({id_permiso:{$eq:2003}});

//Para insertar un solo documento en usuarios
// db.usuarios.insertOne({
//     "id_usuario" : 2002,
//     "nombre" :"Liliana Arteaga",
//     "email" : "liliana89@gmail.com",
//     "id_rol" : ["1"],
//     "contrasena" : "10101010",
//     "estado": ["habilitado"]
// })

//Para insertar varios documentos en usuarios
// db.usuarios.insertMany([{
//     "id_usuario" : 2003,
//     "nombre" :"Salome Arias",
//     "email" : "salome79@gmail.com",
//     "id_rol" : ["1"],
//     "contrasena" : "0000000",
//     "estado": ["habilitado"]
// },{
//     "id_usuario" : 2004,
//     "nombre" :"Ruben Arias",
//     "email" : "RubenA9@gmail.com",
//     "id_rol" : ["1"],
//     "contrasena" : "20202020",
//     "estado": ["Inhabilitado"]
// }
// ])

////Para insertar un solo documento en clientes
// db.clientes.insertOne({
//     "id_cliente" : 2001,
//     "nombre_cliente" : "Sara",
//     "cedula_cliente" : 1021803129,
//     "email_cliente" : "saritalop789@gmail.com",
//     "direccion" : "cll61 #42-59 villa hermosa",
//     "telefono_cliente" : 3004020129,
//     "estado": ["habilitado"]
// })


//Para insertar varios documentos en clientes
// db.clientes.insertMany([{
//     "id_cliente" : 2002,
//     "nombre_cliente" : "Nicolas Arteaga",
//     "cedula_cliente" : 1021543543,
//     "email_cliente" : "nicolas789@gmail.com",
//     "direccion" : "cll61 #43-58 villa hermosa",
//     "telefono_cliente" : 3015679871,
//     "estado": ["habilitado"]
// },
// {
//     "id_cliente" : 2003,
//     "nombre_cliente" : "Milena Restrepo",
//     "cedula_cliente" : 1011987456,
//     "email_cliente" : "Milena789@gmail.com",
//     "direccion" : "cll41 #33-68 Buenos Aires",
//     "telefono_cliente" : 3007654312,
//     "estado": ["Inhabilitado"]
// }])

//Para insertar un solo documento en permisos
// db.permisos.insertOne({
//     "id_permiso" : 2003,
//     "nombre_permiso" :["Crear Usuario"],
//     "estado": ["habilitado"]
// })

//Para insertar varios documentos en permisos
// db.permisos.insertMany([{
//     "id_permiso" : 2004,
//     "nombre_permiso" :["Actualizar Usuario"],
//     "estado": ["habilitado"]
// },
// {
//     "id_permiso" : 2005,
//     "nombre_permiso" :["Inhabilitar Cliente"],
//     "estado": ["habilitado"]
// }])

//Actualizar un documento de usuario
// db.usuarios.updateOne({"id_usuario":2002},
//                       {$set:{"email": "Lili89@gmail.com"}})

//Actualizar el nombre del campo en todos los documentos
//  db.usuarios.updateMany({},{$rename :{"email" : "Correo"}})

//Actualizar un documento de clientes
//  db.clientes.updateOne({"id_cliente":2003},
//                        {$set:{"nombre_cliente": "Ana"}})

//Actualizar el nombre del campo en todos los documentos
//  db.clientes.updateMany({},{$rename :{"direccion" : "Address"}})

//Actualizar un documento de permisos
//   db.permisos.updateOne({"id_permiso":2003},
//                        {$set:{"estado": ["Inhabilitado"]}})

//Actualizar el nombre del campo en todos los documentos
// db.permisos.updateMany({},{$rename :{"nombre_permiso" : "nombre_permisos"}})

//Eliminar un documento con el ID dado en usuarios
// db.usuarios.deleteOne(
//     { _id: ObjectId("6473a31776e81d970695edc9") }
//   );

//Elimina todos los documentos de la coleccion
//db.usuarios.deleteMany({});

//Eliminar un documento con el ID dado en clientes
// db.clientes.deleteOne(
//     { _id: ObjectId("6473a78b10ba9dc93fb7194c") }
//   );

//Elimina todos los documentos de la coleccion
//db.clientes.deleteMany({});

//Eliminar un documento con el ID dado en permisos
// db.permisos.deleteOne(
//     { _id: ObjectId("6473a448a46ce018c29c6f34") }
//   );

//Elimina todos los documentos de la coleccion
//db.permisos.deleteMany({});


//Para eliminar una coleccion
//db.usuarios.drop();

//Para eliminar la base de datos
//db.dropDatabase();


//$lockup = mostrar el usuario con sus estado y a la vez mostrar los permisos que comparten dicho estado en comun

// db.usuarios.aggregate([
//     {$lookup: {
//       from: "permisos",
//       localField: "estado",
//       foreignField: "estado",
//       as: "permisos"
//     }

//     },{
//         $project: {
//           id_usuario:1,
//           id_rol:1,
//           nombre:1,
//           email: 1,
//           estado:1,
//           permisos:{
//             id_permiso: 1,
//             nombre_permiso: 1,estado:1,
//           }
          
//         }
//     },{$limit:2}
// ])

//$lockup = mostrar el usuario con sus estado y a la vez mostrar los clientes que comparten dicho estado en comun

// db.usuarios.aggregate([
//     {$lookup: {
//       from: "clientes",
//       localField: "estado",
//       foreignField: "estado",
//       as: "clientes"
//     }

//     },{
//         $project: {
//           id_usuario:1,
//           nombre:1,
//           id_rol:1,
//           email: 1,
//           estado:1,
//           clientes:{
//             id_cliente:1,
//             nombre_cliente:1,
//             cedula_cliente:1,
//             email_cliente: 1,
//             telefono_cliente:1,
//             estado:1
//           }
          
//         }
//     },{$limit:2}

// ])

//pipelines-usuario

// db.usuarios.aggregate([
//    {
//       $group: {
//          _id: "$nombre",
//          cantidad: { $sum: 1 }
//       }
//    },
//    {
//       $sort: { cantidad: -1 }
//    },
//    {
//       $limit: 7
//    },
   
//  ])


//pipelines-clientes

// db.clientes.aggregate([
//   {
//      $group: {
//         _id: "$nombre_cliente",
//         cantidad_clientes: { $sum: 1 }
//      }
//   },
//   {
//      $sort: { cantidad: 1 }
//   },
//   {
//      $limit: 10
//   }
// ])

// Unwind sirve para convertir un array y devolverlo separado en documentos

// En la coleccion usuarios no tenemos array, entoces no hace nada la operacion

//db.usuarios.aggregate([{$unwind : "$nombre"}]).pretty()

// Aqui lo hacemos en la coleccion permisos, en donde tenemos un array y nos lo traera separado

//db.permisos.aggregate([{$unwind : "$nombre_permiso"}]).pretty()

// En la coleccion clientes no tenemos array, entonces no hace nada la operacion
//db.clientes.aggregate([{$unwind : "$nombre_cliente"}]).pretty()

//Nos muestra los Id de manera ascendente
// db.usuarios.find().sort({"id_usuario":1})

//Nos muestra los Id de manera descendente
//db.clientes.find().sort({"id_cliente":-1})

//Nos muestra los Id de manera ascendente
// db.permisos.find().sort({"id_permiso":1})
