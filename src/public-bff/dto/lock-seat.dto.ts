import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class LockSeatDto {
  @IsString()
  @IsNotEmpty()
  eventId!: string;

  @IsString()
  @IsNotEmpty()
  seatId!: string;

  @IsString()
  @IsOptional()
  queueToken?: string;

  @IsUUID()
  @IsOptional()
  orderSessionId?: string;
}
