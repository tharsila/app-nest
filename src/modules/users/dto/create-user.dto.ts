import { User } from '../entities/user.entity';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto extends User {
  @IsString({ message: 'O nome deve ter caracteres alfanuméricos' })
  name: string;

  @IsEmail({}, { message: 'Por favor, insira um endereço de e-mail válido' })
  email: string;

  @IsNotEmpty({ message: 'Preenchimento obrigatório' })
  password: string;
}
