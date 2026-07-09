import { z } from 'zod';

export const LockSeatDtoSchema = z.object({
  eventId: z.string().min(1),
  seatId: z.string().min(1),
  queueToken: z.string().optional(),
  orderSessionId: z.uuid().optional(),
});

export type LockSeatDto = z.infer<typeof LockSeatDtoSchema>;
