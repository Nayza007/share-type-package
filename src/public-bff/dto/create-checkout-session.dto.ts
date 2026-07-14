import { z } from 'zod';

export const CheckoutItemDtoSchema = z
  .object({
    ticketTypeId: z
      .string()
      .min(1)
      .describe('Ticket type identifier selected by the customer')
      .meta({ example: 'ticket_type_123' }),
    seatId: z
      .string()
      .describe('Optional seat identifier for reserved seating products')
      .meta({ example: 'A1' })
      .optional(),
  })
  .meta({
    id: 'CheckoutItemDto',
    description: 'Single line item sent to the checkout session endpoint',
  });

export type CheckoutItemDto = z.infer<typeof CheckoutItemDtoSchema>;

export const CreateCheckoutSessionDtoSchema = z
  .object({
    eventId: z
      .string()
      .min(1)
      .describe('Event identifier associated with the checkout')
      .meta({ example: 'evt_123' }),
    userId: z
      .string()
      .min(1)
      .describe('User identifier that owns the checkout attempt')
      .meta({ example: 'user_123' }),
    queueToken: z
      .string()
      .describe('Optional queue token proving queue eligibility')
      .meta({ example: 'queue_token_123' })
      .optional(),
    items: z
      .array(CheckoutItemDtoSchema)
      .describe('List of items included in the checkout session')
      .meta({
        example: [
          {
            ticketTypeId: 'ticket_type_123',
            seatId: 'A1',
          },
        ],
      }),
  })
  .meta({
    id: 'CreateCheckoutSessionDto',
    description: 'Payload for creating a checkout session',
  });

export type CreateCheckoutSessionDto = z.infer<typeof CreateCheckoutSessionDtoSchema>;
