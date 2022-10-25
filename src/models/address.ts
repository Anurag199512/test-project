import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';
import { Person } from './person';

export interface AddressModel {
  id: number
  street: string
  city: string
  country: string
  personId: number
}

export interface Address extends Sequelize.Model<Address, AddressModel> {
  id: number
  street: string
  city: string
  country: string
  personId: number
  createdAt: Date
  updatedAt: Date
}

export const Address = sequelize.define<Address, AddressModel>('address', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  street: Sequelize.STRING,
  city: Sequelize.STRING,
  country: Sequelize.STRING,
  personId: Sequelize.NUMBER
});


Address.belongsTo(Person, { foreignKey: 'personId' });