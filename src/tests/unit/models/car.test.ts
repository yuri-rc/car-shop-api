import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import {
	carMock,
} from '../../mocks/carMock';

describe('Car Model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMock);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMock);
		});
	});
	
});