import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export const apiPropertiesUser: {
  [P in keyof Partial<CreateUserDto>]: ApiPropertyOptions;
} = {
  firstname: {
    required: true,
    format: 'string',
    example: 'Zakaria',
    description: 'User firstname',
    minLength: 2,
    maxLength: 24,
  },
  lastname: {
    required: true,
    format: 'string',
    example: 'ATTAOUI',
    description: 'User lastname',
    minLength: 2,
    maxLength: 24,
  },
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
  adresse: {
    required: true,
    format: 'string',
    example: '8 impasse de la chapelle',
    description: 'User adresse',
  },
  city: {
    required: true,
    format: 'string',
    example: 'PARIS',
    description: 'User city',
  },
  codeCity: {
    required: true,
    format: 'number',
    example: '75018',
    description: 'User city code',
  },
  age: {
    required: true,
    format: 'number',
    example: '19',
    description: 'User age',
  },
};

export class CreateUserDto {
  @ApiProperty(apiPropertiesUser.firstname)
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  firstname: string;

  @ApiProperty(apiPropertiesUser.lastname)
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  lastname: string;

  @ApiProperty(apiPropertiesUser.email)
  @IsEmail()
  email: string;

  @ApiProperty(apiPropertiesUser.password)
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty(apiPropertiesUser.adresse)
  @IsString()
  @IsNotEmpty()
  adresse: string;

  @ApiProperty(apiPropertiesUser.city)
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty(apiPropertiesUser.codeCity)
  @IsNumber()
  @IsNotEmpty()
  codeCity: number;

  @ApiProperty(apiPropertiesUser.age)
  @IsNumber()
  @IsNotEmpty()
  age: number;

  isValide: boolean;

  validationToken: string;

  refreshToken: string;
}
