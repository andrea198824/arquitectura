// import { fileURLToPath } from 'url';
// import path from 'path';
// import fs from 'fs/promises';
// import server from './back/app.js';

// // Recreación de __dirname en el contexto de módulos ES
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// async function cargarDataJson() {
//   const jsonPath = path.resolve(__dirname, './back/bd/data.json');
//   const data = await fs.readFile(jsonPath, 'utf-8');
//   return JSON.parse(data);
// }

// cargarDataJson().then(data => {
//   server.listen(3002, () => {
//     console.log('Server listening at 3002');
//   });
// }).catch(error => console.error(error));

import server from './back/app.js'; // Asumiendo que app.js exporta la instancia configurada de Express

const port = 3002;
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});