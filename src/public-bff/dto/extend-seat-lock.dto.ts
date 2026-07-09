import { IsNotEmpty, IsString } from 'class-validator';

export class ExtendSeatLockDto {
  @IsString()
  @IsNotEmpty()
  eventId!: string;

  @IsString()
  @IsNotEmpty()
  seatId!: string;

  @IsString()
  @IsNotEmpty()
  lockToken!: string;
}
