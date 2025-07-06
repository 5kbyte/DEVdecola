import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmpresaDto {
  @IsNotEmpty({message: "CNPJ da empresa é obrigatório"})
  @IsString({ message: 'Deve ser uma String' })
  empresa_cnpj: string;

  @IsNotEmpty({message: "O ID do usuario é obrigatório"})
  usuario_id: number;
}