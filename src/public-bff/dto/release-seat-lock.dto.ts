import { z } from 'zod';

export const ReleaseSeatLockDtoSchema = z.object({
  eventId: z.string().min(1),
  seatId: z.string().min(1),
  lockToken: z.string().optional(),
});

export type ReleaseSeatLockDto = z.infer<typeof ReleaseSeatLockDtoSchema>;
