import { z } from 'zod';

export const CheckoutItemDtoSchema = z.object({
  ticketTypeId: z.string().min(1),
  seatId: z.string().optional(),
});

export type CheckoutItemDto = z.infer<typeof CheckoutItemDtoSchema>;

export const CreateCheckoutSessionDtoSchema = z.object({
  eventId: z.string().min(1),
  queueToken: z.string().optional(),
  items: z.array(CheckoutItemDtoSchema),
});

export type CreateCheckoutSessionDto = z.infer<typeof CreateCheckoutSessionDtoSchema>;
