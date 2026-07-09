import { z } from 'zod';

export const ExtendSeatLockDtoSchema = z
  .object({
    eventId: z
      .string()
      .min(1)
      .describe('Event identifier that owns the locked seat')
      .meta({ example: 'evt_123' }),
    seatId: z
      .string()
      .min(1)
      .describe('Seat identifier whose lock should be extended')
      .meta({ example: 'A1' }),
    lockToken: z
      .string()
      .min(1)
      .describe('Active lock token returned by the seat lock service')
      .meta({ example: 'lock_token_123' }),
  })
  .meta({
    id: 'ExtendSeatLockDto',
    description: 'Payload for extending an existing seat lock',
  });

export type ExtendSeatLockDto = z.infer<typeof ExtendSeatLockDtoSchema>;
