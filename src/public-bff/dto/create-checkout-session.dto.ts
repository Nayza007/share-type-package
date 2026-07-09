import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';

export class CheckoutItemDto {
  @IsString()
  @IsNotEmpty()
  ticketTypeId!: string;

  @IsString()
  @IsOptional()
  seatId?: string;
}

export class CreateCheckoutSessionDto {
  @IsString()
  @IsNotEmpty()
  eventId!: string;

  @IsString()
  @IsOptional()
  queueToken?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CheckoutItemDto)
  items!: CheckoutItemDto[];
}
