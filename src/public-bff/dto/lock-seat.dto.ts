import { z } from 'zod';

export const LockSeatDtoSchema = z
  .object({
    eventId: z
      .string()
      .min(1)
      .describe('Event identifier that owns the seat map')
      .meta({ example: 'evt_123' }),
    seatId: z
      .string()
      .min(1)
      .describe('Seat identifier to be locked')
      .meta({ example: 'A1' }),
    queueToken: z
      .string()
      .describe('Optional queue token used to authorize seat locking')
      .meta({ example: 'queue_token_123' })
      .optional(),
    orderSessionId: z
      .uuid()
      .describe('Optional checkout session identifier related to the lock')
      .meta({ example: '550e8400-e29b-41d4-a716-446655440000' })
      .optional(),
  })
  .meta({
    id: 'LockSeatDto',
    description: 'Payload for locking a seat before checkout',
  });

export type LockSeatDto = z.infer<typeof LockSeatDtoSchema>;
