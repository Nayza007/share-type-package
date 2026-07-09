import { z } from 'zod';

export const ReleaseQueueDtoSchema = z
  .object({
    eventId: z
      .string()
      .min(1)
      .describe('Event identifier for the waiting room queue')
      .meta({ example: 'evt_123' }),
    queueToken: z
      .string()
      .min(1)
      .describe('Queue token that should be released')
      .meta({ example: 'queue_token_123' }),
  })
  .meta({
    id: 'ReleaseQueueDto',
    description: 'Payload for releasing a waiting room queue token',
  });

export type ReleaseQueueDto = z.infer<typeof ReleaseQueueDtoSchema>;
