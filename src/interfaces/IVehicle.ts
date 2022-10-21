import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string({
    required_error: 'Model is required',
    invalid_type_error: 'Model must be a string',
  }).min(3, { message: 'Model must be 3 or more characters long' }),
  year: z.number({
    required_error: 'Year is required',
    invalid_type_error: 'Year must be a int',
  }).gte(1900, {
    message: 'year must be greater than or equal to 1900',
  }).lte(2022, {
    message: 'year must be less than or equal to 2022',
  }).positive(),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' }),
  status: z.boolean().optional(),
  buyValue: z.number().int({
    message: 'buyValue must be int',
  }),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { IVehicle, VehicleZodSchema };