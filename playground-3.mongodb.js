use("motorbike")

//--------------CREAR COLECCION USUARIOS-----------------

// db.createCollection("usuarios", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required: ["id_usuario", "id_rol", "nombre", "email", "contrasena"],
//             properties: {
//                 id_usuario: {
//                     bsonType: "int",
//                     description: "ID del usuario"
//                 },
//                 id_rol: {
//                     bsonType: "array",
//                     description: "ID del rol"
//                 },
//                 nombre: {
//                     bsonType: "string",
//                     description: "Nombre del usuario"
//                 },
//                 email: {
//                     bsonType: "string",
//                     description: "Email del usuario"
//                 },
//                 contrasena: {
//                     bsonType: "string",
//                     description: "Contarseña del usuario"
//                 }, 
//                 estado: {
//                     bsonType: "array", 
//                     description: "Estado del usuario"
//                 }

//             }
//         }
//     }
// })

//----------CREAR COLECCION DE CLIENTES-------------

// db.createCollection("clientes", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required: ["id_cliente", "nombre_cliente"],
//             properties: {
//                 id_cliente: {
//                     bsonType: "int",
//                     description: "ID del cliente"
//                 },
//                 nombre_cliente: {
//                     bsonType: "string",
//                     description: "Nombre del cliente"
//                 },
//                 cedula_cliente: {
//                     bsonType: "number",
//                     description: "ID del cliente"
//                 },
//                 email_cliente: {
//                     bsonType: "string",
//                     description: "Email del cliente"
//                 },
//                 direccion: {
//                     bsonType: "string",
//                     description: "Dirección del cliente"
//                 },
//                 telefono_cliente: {
//                     bsonType: "number",
//                     description: "Telefono del cliente"
//                 },
//                 estado: {
//                     bsonType: "array",
//                     description: "Estado del cliente"
//                     }

//             }
//         }
//     }
// })

//--------------CREAR COLECCION PERMISOS----------------

// db.createCollection("permisos", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required: ["id_permiso","nombre_permiso"],
//             properties: {
//                 id_permiso: {
//                     bsonType: "int",
//                     description: "ID del repuesto"
//                 },
//                 nombre_permiso: {
//                     bsonType: "array",
//                     description: "Nombre del permiso"
//                 },
//                 estado: {
//                     bsonType: "array",
//                     description: "Estado del permiso"
//                     }
                    

//             }
//         }
//     }
// })
