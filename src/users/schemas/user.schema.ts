import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { Role } from 'src/users/enums/roles.enum';

export const apiPropertiesUser: {
  [P in keyof Partial<User>]: ApiPropertyOptions;
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
@Schema({
  timestamps: { createdAt: 'created' },
})
export class User extends Document {
  @ApiProperty(apiPropertiesUser.firstname)
  @Prop({ required: true })
  firstname: string;

  @ApiProperty(apiPropertiesUser.lastname)
  @Prop({ required: true })
  lastname: string;

  @ApiProperty(apiPropertiesUser.email)
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty(apiPropertiesUser.adresse)
  @Prop({ required: true })
  adresse: string;

  @ApiProperty(apiPropertiesUser.city)
  @Prop({ required: true })
  city: string;

  @ApiProperty(apiPropertiesUser.codeCity)
  @Prop({ required: true })
  codeCity: number;

  @ApiProperty(apiPropertiesUser.age)
  @Prop({ required: true })
  age: number;

  @ApiProperty(apiPropertiesUser.password)
  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isValide: boolean;

  @Prop()
  validationToken: string;

  @Prop()
  refreshToken: string;

  @Prop()
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
