import httpStatus from 'http-status';

/**
 * Extending the HTTP Status module
 *
 * @since - September 2, 2021
 * @category - Library to obtain codes and HTTP messages.
 * @copyright - Gopass, Inc. All Rights Reserved.
 * @see - Information: This functionality is used to extend the HTTP codes
 *              and messages by implementing other codes and messages internal to the POSEIDON project.
 */
const httpClassNames = httpStatus.classes;

const GP_POSEIDON = {
  227: 'The data already exists',
  '227_NAME': 'DATA_ALREADY_EXIST',
  '227_MESSAGE': 'Successful process, the resource is already created.',
  '227_CLASS': httpClassNames.SUCCESSFUL,
  DATA_ALREADY_EXIST: 227,

  228: 'Unregistered mail',
  '228_NAME': 'UNREGISTERED_MAIL',
  '228_MESSAGE': 'Correo electronico no registrado.',
  '228_CLASS': httpClassNames.SUCCESSFUL,
  UNREGISTERED_MAIL: 228,

  229: 'Incorrect password',
  '229_NAME': 'INCORRECT_PASSWORD',
  '229_MESSAGE': 'Contraseña incorrecta.',
  '229_CLASS': httpClassNames.SUCCESSFUL,
  INCORRECT_PASSWORD: 229,

  230: 'Unregistered phone',
  '230_NAME': 'UNREGISTERED_PHONE',
  '230_MESSAGE': 'Celular no registrado.',
  '230_CLASS': httpClassNames.SUCCESSFUL,
  UNREGISTERED_PHONE: 230,

  231: 'Violate dependencies on the foreign keys with the table',
  '231!_NAME': 'FK_DEPENDENCIES',
  '231_MESSAGE': 'Violate FK.',
  '231_CLASS': httpClassNames.SUCCESSFUL,
  FK_DEPENDENCIES: 231,

  232: 'Prerequisite in general data',
  '232!_NAME': 'PREREQUISITE_DATA',
  '232_MESSAGE': 'Data incomplete',
  '232_CLASS': httpClassNames.SUCCESSFUL,
  PREREQUISITE_DATA: 232,

  233: 'the password do not match',
  '233!_NAME': 'PASSWORD_NOT_MATCH',
  '233_MESSAGE': 'Password do not match',
  '233_CLASS': httpClassNames.SUCCESSFUL,
  PASSWORD_NOT_MATCH: 233,

  234: 'Usuario no encontrado',
  '234_NAME': 'USER_NOT_FOUND',
  '234_MESSAGE': 'Usuario no encontrado',
  '234_CLASS': httpClassNames.SUCCESSFUL,
  USER_NOT_FOUND: 234,

  235: 'La referencia de pago actualmente existe',
  '235_NAME': 'TRNSREF_ALREADY_EXIST',
  '235_MESSAGE': 'La referencia de pago actualmente existe',
  '235_CLASS': httpClassNames.SUCCESSFUL,
  TRNSREF_ALREADY_EXIST: 235,

  236: 'Multiples usuarios encontrados',
  '236_NAME': 'MULTIPLE_USERS_FOUND',
  '236_MESSAGE': 'Multiples usuarios encontrados',
  '236_CLASS': httpClassNames.SUCCESSFUL,
  MULTIPLE_USERS_FOUND: 236,

  237: 'Transacción rechazada',
  '237_NAME': 'TRANSACTION_DECLINED',
  '237_MESSAGE': 'Transacción rechazada',
  '237_CLASS': httpClassNames.SUCCESSFUL,
  TRANSACTION_DECLINED: 237,

  238: 'Transacción en progreso',
  '238_NAME': 'TRANSACTION_IN_PROGRESS',
  '238_MESSAGE': 'Transacción en progreso',
  '238_CLASS': httpClassNames.SUCCESSFUL,
  TRANSACTION_IN_PROGRESS: 238,

  239: 'Existe una transacción exitosa, ¿quieres volver a cobrar? intenta con pago forzado',
  '239_NAME': 'ALREADY_TX_SUCCESS',
  '239_MESSAGE':
    'Existe una transacción exitosa, ¿quieres volver a cobrar? intenta con pago forzado',
  '239_CLASS': httpClassNames.SUCCESSFUL,
  ALREADY_TX_SUCCESS: 239,

  240: 'Comercio no encontrado',
  '240_NAME': 'COMMERCE_NOT_FOUND',
  '240_MESSAGE': 'Comercio no encontrado',
  '240_CLASS': httpClassNames.SUCCESSFUL,
  COMMERCE_NOT_FOUND: 240,

  452: 'The parameters are incomplete.',
  '452_NAME': 'INCOMPLETE_PARAMETERS',
  '452_MESSAGE':
    'The request cannot be processed because the parameters are incomplete.',
  '452_CLASS': httpClassNames.CLIENT_ERROR,
  INCOMPLETE_PARAMETERS: 452,

  460: 'Foreign key not found',
  '460_NAME': 'FOREIGN_KEY_NOT_FOUND',
  '460_MESSAGE':
    'Requires the parent entities to establish the foreign relationship.',
  '460_CLASS': httpClassNames.CLIENT_ERROR,
  FOREIGN_KEY_NOT_FOUND: 460,

  461: 'Foreign key not found',
  '461_NAME': 'PRECONDITION_FAIL',
  '461_MESSAGE': 'Fallo la precondicion.',
  '461_CLASS': httpClassNames.CLIENT_ERROR,
  PRECONDITION_FAIL: 461,
};

const status = {
  ...httpStatus,
  ...httpStatus.extra,
  ...GP_POSEIDON,
};

export default status;
