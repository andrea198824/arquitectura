import data from '../services/index.js';
import httpStatus from 'http-status';
import  ApiError  from '../../utils/ApiError.js';

async function getClientes(req, res) {
    try {
      const allRecordsProductos = await data.allProduct();
      const allRecordsVendedor = await data.allVendedor();
      if (allRecordsProductos && (allRecordsProductos.rows || allRecordsProductos.length > 0)) {
        return res.status(httpStatus.OK).json({
          code: httpStatus.OK,
          message: 'Bienvenido. Estos son los productos en oferta y los vendedores disponibles para atenderlo.',
          data: {allRecordsProductos, allRecordsVendedor}
        });
      }
      return res.status(httpStatus.NO_CONTENT).json({
        code: httpStatus.NO_CONTENT,
        message: httpStatus['204'],
        data: {},
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error);
    }
  }
  
  export default {
    getClientes
  };