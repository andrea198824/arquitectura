import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import controllerData from '../controller/index.js';

const router = Router();

router.get(
    '/clientes',
    asyncHandler(controllerData.getClientes),
  );

export default router;
  