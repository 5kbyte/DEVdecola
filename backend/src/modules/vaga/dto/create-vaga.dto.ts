import { IsDateString, IsOptional, IsString } from "class-validator";

export class CreateVagaDto{
  @IsString()
  empresa_cnpj: string;

  @IsString()
  descricao: string;

  @IsOptional()
  @IsString()
  beneficios?: string;

  @IsOptional()
  @IsString()
  modalidade?: string;

  @IsOptional()
  @IsDateString()
  data_fim?: string; 

  @IsOptional()
  @IsString()
  requisitos?: string;

  @IsOptional()
  @IsString()
  link_contrato?: string;

  @IsOptional()
  @IsString()
  regime?: string;

  @IsOptional()
  @IsString()
  carga_horaria?: string;

}