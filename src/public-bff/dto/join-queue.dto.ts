import { z } from 'zod';

export const JoinQueueDtoSchema = z.object({
  eventId: z.string().min(1),
  userId: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export type JoinQueueDto = z.infer<typeof JoinQueueDtoSchema>;
