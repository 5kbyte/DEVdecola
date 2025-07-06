import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
export class CreateAuthDto {

  @IsNotEmpty({message: "E-mail é obrigatório"})
  @IsEmail(undefined, {message: "O E-mail deve ser válido"})
  usuario_email: string;

  @IsNotEmpty({message: "Senha é obrigatório"})
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
}
