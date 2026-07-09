import { IsNotEmpty, IsString } from 'class-validator';

export class ReleaseQueueDto {
  @IsString()
  @IsNotEmpty()
  eventId!: string;

  @IsString()
  @IsNotEmpty()
  queueToken!: string;
}
