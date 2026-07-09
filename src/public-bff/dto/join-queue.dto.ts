import { z } from 'zod';

export const JoinQueueDtoSchema = z
  .object({
    eventId: z
      .string()
      .min(1)
      .describe('Event identifier used for joining the waiting room')
      .meta({ example: 'evt_123' }),
    userId: z
      .string()
      .describe('Optional user identifier from the client application')
      .meta({ example: 'user_123' })
      .optional(),
    metadata: z
      .record(z.string(), z.unknown())
      .describe('Optional client metadata attached to the queue request')
      .meta({
        example: {
          channel: 'web',
          campaign: 'rajadamnern-homepage',
        },
      })
      .optional(),
  })
  .meta({
    id: 'JoinQueueDto',
    description: 'Payload for joining the waiting room queue',
  });

export type JoinQueueDto = z.infer<typeof JoinQueueDtoSchema>;
