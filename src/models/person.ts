import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';
import { Address } from './address';
import { Drive } from './drive';
import { Vehicle } from './vehicle';

enum PersonType {
  student = 'Student',
  professor = 'Professor'
}

export interface PersonModel {
  id: number
  name: string,
  type: PersonType,
  studentNumber?: string
  salary?: string
}

export interface Person extends Sequelize.Model<Person, PersonModel> {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

export const Person = sequelize.define<Person, PersonModel>('drive', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: Sequelize.STRING,
  type: Sequelize.ENUM('Professor', 'Student'),
  salary: Sequelize.STRING,
  studentNumber: Sequelize.STRING
});

Person.hasMany(Vehicle, { foreignKey: 'personId' });
Person.hasOne(Address, { foreignKey: 'personId' });