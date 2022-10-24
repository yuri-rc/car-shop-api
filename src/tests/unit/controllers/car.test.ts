import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import { carMock, carsMock } from '../../mocks/carMock';
import CarController from '../../../controllers/Car';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';


describe('Car Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carMock);
    sinon.stub(carService, 'read').resolves(carsMock);
    sinon.stub(carService, 'readOne').onCall(0).resolves(carsMock[0]);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create Car', () => {
    it('Success', async () => {
      req.body = carMock;
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('Read Car', () => {
    it('Success', async () => {
      req.body = carsMock;
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMock)).to.be.true;
    });
  });

  describe('ReadOne Car', () => {
    it('Success', async () => {
      const _id = '6356cafe97feb94f9f81b1e2'
      req.params = { _id };
      await carController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carsMock[0])).to.be.true;
    });
  });

});