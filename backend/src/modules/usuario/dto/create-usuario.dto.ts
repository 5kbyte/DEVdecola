
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsOptional,
  IsInt
} from 'class-validator';
export class CreateUsuarioDto {
  @IsString({ message: 'Deve ser uma String' })
  @MinLength(4, { message: 'Deve ter pelo menos 4 caracteres' })
  usuario_nome: string;

  @IsString({ message: 'Deve ser uma String' })
  @IsOptional()
  usuario_sobre: string;
  
  @IsNotEmpty({message: "E-mail é obrigatório"})
  @IsEmail(undefined, {message: "O E-mail deve ser válido"})
  usuario_email: string;

  @IsNotEmpty({message: "E-mail é obrigatório"})
  @IsString({ message: 'Deve ser uma String' })
  @MinLength(8, { message: 'Deve ter pelo menos 8 caracteres' })
  @MaxLength(32, { message: 'Deve ter menos de 32 caracteres' })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*!@#$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/, {
    message: `Senha deve conter:
      - Pelo menos um dígito [0-9]
      - Pelo menos uma letra minúscula [a-z]
      - Pelo menos uma letra maiúscula [A-Z]
      - Pelo menos um caractere especial [*.!@#$%^&(){}[]:;<>,.?/~_+-=|\\]
      - Entre 8 e 32 caracteres.`,
  })
  usuario_senha: string;
  
  @IsInt({message: "Deve ser um Int"})
  @IsOptional()
  usuario_telefone: string;

  @IsString({ message: 'Deve ser uma String' })
  @IsOptional()
  usuario_endereco: string;
}
