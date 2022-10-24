import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { ErrorTypes } from '../../../errors/catalog';
import {
  carMock,
  carsMock
} from '../../mocks/carMock';
import { log } from 'console';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMock);
    sinon.stub(carModel, 'read').resolves(carsMock);
    sinon.stub(carModel, 'readOne')
      .onCall(0).resolves(carsMock[0])
      .onCall(2).resolves(null);
  });

  after(() => {
    sinon.restore()
  });

  describe('Create Car', () => {
    it('Success', async () => {
      const carCreated = await carService.create(carMock);

      expect(carCreated).to.be.deep.equal(carMock);
    });

    it('Failure', async () => {
      try {
        await carService.create({} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ZodError);
      }
    });
  });

  describe('Read Car', () => {
    it('Success', async () => {
      const carRead = await carService.read();

      expect(carRead).to.be.deep.equal(carsMock);
    });
  });

  describe('ReadOne Car', () => {
    it('Success', async () => {
      const _id = '6356cafe97feb94f9f81b1e2'
      const carReadOne = await carService.readOne(_id);

      expect(carReadOne).to.be.deep.equal(carsMock[0]);
    });
    it('Failure', async () => {
      const _id = '6356cafe97feb94f9f81b1e2'
      try {
        await carService.readOne(_id);
      } catch (error: any) {
        expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
      }
    });
  });

});