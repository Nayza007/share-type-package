import { z } from 'zod';

export const ExtendSeatLockDtoSchema = z.object({
  eventId: z.string().min(1),
  seatId: z.string().min(1),
  lockToken: z.string().min(1),
});

export type ExtendSeatLockDto = z.infer<typeof ExtendSeatLockDtoSchema>;
