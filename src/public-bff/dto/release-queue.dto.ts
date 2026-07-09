import { z } from 'zod';

export const ReleaseQueueDtoSchema = z.object({
  eventId: z.string().min(1),
  queueToken: z.string().min(1),
});

export type ReleaseQueueDto = z.infer<typeof ReleaseQueueDtoSchema>;
