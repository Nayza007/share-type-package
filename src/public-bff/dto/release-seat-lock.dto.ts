import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ReleaseSeatLockDto {
  @IsString()
  @IsNotEmpty()
  eventId!: string;

  @IsString()
  @IsNotEmpty()
  seatId!: string;

  @IsString()
  @IsOptional()
  lockToken?: string;
}
