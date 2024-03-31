import _sequelize from 'sequelize';
/* eslint-disable camelcase */
/* eslint-disable-next-line no-unused-vars */
const { Model, Sequelize } = _sequelize;

export default class clients extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          type: DataTypes.STRING(30),
          allowNull: false,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING(30),
          allowNull: true,
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        geolocation: {
          type: 'POINT',
          allowNull: true,
        },
        createduser: {
          type: DataTypes.TEXT,
          allowNull: false,
          defaultValue: 'dbinsert',
        },
        updateduser: {
          type: DataTypes.TEXT,
          allowNull: false,
          defaultValue: 'dbinsert',
        },
      },
      {
        sequelize,
        tableName: 'citycodes',
        schema: 'genc',
        timestamps: true,
        createdAt: 'createdat',
        updatedAt: 'updatedat',
        paranoid: true,
        deletedAt: 'deletedat',
        indexes: [
          {
            name: 'citycodes_pkey',
            unique: true,
            fields: [{ name: 'citycode' }],
          },
        ],
      },
    );
    return genc_citycodes;
  }
}