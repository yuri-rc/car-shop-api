import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import {
	carMock,
} from '../../mocks/carMock';

describe('Car Model', () => {
	const frameModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMock);
	});

	after(() => {
		sinon.restore();
	})

	describe('creating a car', () => {
		it('successfully created', async () => {
			const newFrame = await frameModel.create(carMock);
			expect(newFrame).to.be.deep.equal(carMock);
		});
	});
	
});