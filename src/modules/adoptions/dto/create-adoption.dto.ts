import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';
import { Adoption } from '../entities/adoption.entity';

export class CreateAdoptionDto extends Adoption {
  @IsNotEmpty()
  @IsNumber()
  @Min(10, { message: 'O preço mínimo de apadrinhamento é R$10,00' })
  @Max(100, { message: 'O preço máximo de apadrinhamento é R$100,00' })
  price: number;

  @IsNotEmpty()
  @IsNumber()
  pet_id: number;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}
