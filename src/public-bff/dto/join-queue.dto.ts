import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class JoinQueueDto {
  @IsString()
  @IsNotEmpty()
  eventId!: string;

  @IsString()
  @IsOptional()
  userId?: string;

  @IsObject()
  @IsOptional()
  metadata?: Record<string, unknown>;
}
