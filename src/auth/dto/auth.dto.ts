import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export const apiPropertiesAuth: {
  [P in keyof Partial<AuthDto>]: ApiPropertyOptions;
} = {
  email: {
    required: true,
    format: 'string',
    example: 'zakaria@gmail.com',
    description: 'User Email',
  },
  password: {
    required: true,
    format: 'string',
    example: 'zakaria1998',
    description: 'User password',
  },
};

export class AuthDto {
  @ApiProperty(apiPropertiesAuth.email)
  @IsEmail()
  email: string;

  @ApiProperty(apiPropertiesAuth.password)
  @IsString()
  @MinLength(8)
  password: string;
}
