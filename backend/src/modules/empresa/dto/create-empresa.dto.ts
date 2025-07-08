import { IsNotEmpty, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateEmpresaDto {
  @IsNotEmpty({ message: 'CNPJ da empresa é obrigatório' })
  @IsString({ message: 'Deve ser uma String' })
  empresa_cnpj: string;

  @IsNotEmpty({ message: 'O ID do usuario é obrigatório' })
  usuario_id: number;

  @IsDateString({}, { message: 'Deve ser uma data válida no formato ISO' })
  @IsOptional()
  ano_fundacao: string;
}

