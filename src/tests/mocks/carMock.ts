import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
	model: 'Some Car',
	year: 2002,
	color: 'black',
	buyValue: 6000000,
	doorsQty: 4,
	seatsQty: 5,
};

const carsMock = [
	{
		_id: '6356cafe97feb94f9f81b1e2',
		model: 'Some Car',
		year: 2002,
		color: 'black',
		buyValue: 6000000,
		doorsQty: 4,
		seatsQty: 5,
	},
	{
		_id: '6356cb2997feb94f9f81b1e6',
		model: 'Some Car 2',
		year: 2003,
		color: 'white',
		buyValue: 8000000,
		doorsQty: 2,
		seatsQty: 2,
	}
];

export {
	carMock,
	carsMock
};