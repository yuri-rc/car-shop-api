import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import {
  carMock,
} from '../../mocks/carMock';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carMock);

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

});