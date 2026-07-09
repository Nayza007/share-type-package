import { z } from 'zod';

export const ReleaseSeatLockDtoSchema = z
  .object({
    eventId: z
      .string()
      .min(1)
      .describe('Event identifier that owns the seat lock')
      .meta({ example: 'evt_123' }),
    seatId: z
      .string()
      .min(1)
      .describe('Seat identifier whose lock should be released')
      .meta({ example: 'A1' }),
    lockToken: z
      .string()
      .describe('Optional lock token used to validate the release request')
      .meta({ example: 'lock_token_123' })
      .optional(),
  })
  .meta({
    id: 'ReleaseSeatLockDto',
    description: 'Payload for releasing a seat lock',
  });

export type ReleaseSeatLockDto = z.infer<typeof ReleaseSeatLockDtoSchema>;
