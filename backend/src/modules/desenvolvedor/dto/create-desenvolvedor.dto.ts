import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDesenvolvedorDto {
  @IsNotEmpty({message: "CPF do desenvolvedor é obrigatório"})
  @IsString({ message: 'Deve ser uma String' })
  desenvolvedor_cpf: string;

  @IsNotEmpty({message: "O ID do usuario é obrigatório"})
  usuario_id: number;
}


