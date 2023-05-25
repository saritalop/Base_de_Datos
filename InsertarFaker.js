//----------------------USUARIO-------------------------

// const { faker, fakerRO } = require('@faker-js/faker');
// const { MongoClient } = require('mongodb');

// // Configuración de la conexión a la base de datos
// const uri = "mongodb+srv://saritalop789:E1021803129@cluster0.tvpvw3p.mongodb.net/?retryWrites=true&w=majority";
// const dbName = 'motorbike';
// const collectionName = 'usuarios';

// // Genera usuarios con Faker y agrégalos a la base de datos
// async function insertUsers(numUsers) {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     console.log('Conectado exitosamente a MongoDB');

//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     for (let i = 0; i < numUsers; i++) {
//       const usua = {
//         id_usuario: faker.number.int({max:2000}),
//         nombre: faker.person.firstName(),
//         email: faker.internet.email(), 
//         id_rol: faker.helpers.arrayElements(["1","2","3"],1,1),
//         contrasena: faker.internet.password(),
//         estado: faker.helpers.arrayElements(["Habilitado", "Inhabilitado"], 1,1)
//         // Agrega más campos según tus necesidades
//       };

//       await collection.insertOne(usua);
//     }

//     console.log(`${numUsers} usuarios agregados exitosamente.`);
//   } catch (error) {
//     console.error('Error al conectar o insertar usuarios:', error);
//   } finally {
//     await client.close();
//   }
// }
// // Cantidad de usuarios a generar
// const numUsuariosAGenerar = 2000;

// // Llamada a la función para insertar usuarios
// insertUsers(numUsuariosAGenerar);


//-----------------------CLIENTES-----------------------------------

// const { faker, fakerRO } = require('@faker-js/faker');
// const { MongoClient } = require('mongodb');

// // Configuración de la conexión a la base de datos
// const uri = "mongodb+srv://saritalop789:E1021803129@cluster0.tvpvw3p.mongodb.net/?retryWrites=true&w=majority";
// const dbName = 'motorbike';
// const collectionName = 'clientes';

// // Genera usuarios con Faker y agrégalos a la base de datos
// async function insertClient(numUsers) {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     console.log('Conectado exitosamente a MongoDB');

//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     for (let i = 0; i < numUsers; i++) {
//       const clie = {
//         id_cliente: faker.number.int({max:2000}),
//         nombre_cliente: faker.person.firstName(),
//         cedula_cliente: faker.number.int({min:1000000000 , max:1999999999}),
//         email_cliente: faker.internet.email(),
//         direccion_cliente: faker.location.streetAddress(),
//         telefono_cliente: faker.number.int({min:3000000000 , max:3999999999}),
//         estado: faker.helpers.arrayElements(["Habilitado", "Inhabilitado"], 1,1)
//         // Agrega más campos según tus necesidades
//       };

//       await collection.insertOne(clie);
//     }

//     console.log(`${numUsers} clientes agregados exitosamente.`);
//   } catch (error) {
//     console.error('Error al conectar o insertar usuarios:', error);
//   } finally {
//     await client.close();
//   }
// }

// // Cantidad de usuarios a generar
// const numClientesAGenerar = 2000;

// // Llamada a la función para insertar usuarios
// insertClient(numClientesAGenerar);


//-----------------PERMISOS------------------


// const { faker, fakerRO } = require('@faker-js/faker');
// const { MongoClient } = require('mongodb');

// // Configuración de la conexión a la base de datos
// const uri = "mongodb+srv://saritalop789:E1021803129@cluster0.tvpvw3p.mongodb.net/?retryWrites=true&w=majority";
// const dbName = 'motorbike';
// const collectionName = 'permisos';

// // Genera usuarios con Faker y agrégalos a la base de datos
// async function insertUsers(numPer) {
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     console.log('Conectado exitosamente a MongoDB');

//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     for (let i = 0; i < numPer; i++) {
//       const permi = {
//         id_permiso: faker.number.int({max:40}),
//         nombre_permiso: faker.helpers.arrayElements(["Crear Usuario", "Listar Usuario","Actualizar Usuario", "Inhabilitar Usuario","Crear Rol", "Listar Rol","Actualizar Rol", "Inhabilitar Rol",
//         "Crear Permiso", "Listar Permiso","Actualizar Permiso", "Inhabilitar Permiso","Crear Cliente", "Listar Cliente","Actualizar Cliente", "Inhabilitar Cliente","Crear Repuesto", "Listar Repuesto","Actualizar Repuesto", "Inhabilitar Repuesto","Crear Mecanico", "Listar Mecanico","Actualizar Mecanico", "Inhabilitar Mecanico","Crear Servicio", "Listar Servicio","Actualizar Servicio", "Inhabilitar Servicio","Crear Compra", "Listar Compra","Actualizar Compra", "Inhabilitar Compra",
//         "Crear Venta", "Listar Venta","Actualizar Venta", "Inhabilitar Venta"], 1,1),
//         estado: faker.helpers.arrayElements(["Habilitado", "Inhabilitado"], 1,1)
//         // Agrega más campos según tus necesidades
//       };

//       await collection.insertOne(permi);
//     }

//     console.log(`${numPer} permiso agregados exitosamente.`);
//   } catch (error) {
//     console.error('Error al conectar o insertar permisos:', error);
//   } finally {
//     await client.close();
//   }
// }

// // Cantidad de usuarios a generar
// const numPermisoAGenerar = 2000;

// // Llamada a la función para insertar usuarios
// insertUsers(numPermisoAGenerar);