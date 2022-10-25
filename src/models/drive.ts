import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';
import { Person } from './person';
import { Vehicle } from './vehicle';

export interface DriveModel {
  id: number
  date: Date
  distance: number
  vehicleId: number
  personId: number
}

export interface Drive extends Sequelize.Model<Drive, DriveModel> {
  id: number
  date: Date
  distance: number
  vehicleId: number
  personId: number
  createdAt: Date
  updatedAt: Date
}

export const Drive = sequelize.define<Drive, DriveModel>('drive', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: Sequelize.DATE,
  distance: Sequelize.NUMBER,
  personId: Sequelize.NUMBER,
  vehicleId: Sequelize.NUMBER
});

Drive.belongsTo(Vehicle, { foreignKey: 'vehicleId' });
Drive.belongsTo(Person, { foreignKey: 'personId' });