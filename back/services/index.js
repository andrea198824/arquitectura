import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Calculando __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadData() {
    const jsonPath = path.resolve(__dirname, '../bd/data.json'); // Asegúrate de que esta ruta es correcta
    const jsonData = await fs.readFile(jsonPath, 'utf-8');
    return JSON.parse(jsonData);
}


async function getProductsId(data) {
  const productoFiltrado = data.productos.map(producto => ({
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    precio: producto.precio
  }));
  return productoFiltrado.length > 0 ? productoFiltrado : null;
}

// Suponiendo que esta función debe retornar todos los IDs de proveedores (aunque el JSON de ejemplo solo tiene uno)
async function getProveedor(data) {
  return data.proveedor.map(producto => producto.nombre);
}

async function getClientes(data) {
  return data.clientes.map(cliente => cliente.id);
}

// Función para obtener información del vendedor por ID, ajustado para coincidir con el esquema del JSON
async function getVendedorById(data) {
  const vendedorFiltrado = data.vendedores.map(vendedor => ({
    id: vendedor.id,
    nombre: vendedor.nombre,
    email: vendedor.email
  }));
  return vendedorFiltrado.length > 0 ? vendedorFiltrado : null;
}

async function allVendedor() {
  const info = await loadData();
  const clientIds = await getVendedorById(info);
  return clientIds || null;
}

async function allClient() {
  const info = await loadData();
  const allClient = await getClientes(info);
  return allClient || null;
}

async function allProduct() {
  const info = await loadData();
  const allProduct = await getProductsId(info);
  return allProduct || null;
}

export default {
  loadData,
  allVendedor,
  allClient,
  getProveedor,
  allProduct,
};