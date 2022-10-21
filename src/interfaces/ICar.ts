import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a int',
  }).gte(2, {
    message: 'doorsQty must be greater than or equal to 2',
  }).lte(4, {
    message: 'doorsQty must be less than or equal to 4',
  }).positive()
    .int(),
  seatsQty: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a int',
  }).gte(2, {
    message: 'seatsQty must be greater than or equal to 2',
  }).lte(7, {
    message: 'seatsQty must be less than or equal to 7',
  }),
});

type ICar = z.infer<typeof CarZodSchema>;

export { ICar, CarZodSchema };