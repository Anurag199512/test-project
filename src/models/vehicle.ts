import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { Person } from './person'

export interface VehicleModel {
  id: number
  model: string
  plateNumber: string
  personId: number
}

export interface Vehicle extends Sequelize.Model<Vehicle, VehicleModel> {
  id: number
  model: string
  plateNumber: string
  createdAt: Date
  updatedAt: Date
}

export const Vehicle = sequelize.define<Vehicle, VehicleModel>('vehicle', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  model: Sequelize.STRING,
  plateNumber: Sequelize.STRING,
  personId: Sequelize.NUMBER
});

Vehicle.belongsTo(Person, { foreignKey: 'personId' });
