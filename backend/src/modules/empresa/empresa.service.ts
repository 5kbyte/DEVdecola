import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(private readonly prisma: PrismaService){}

  async createEmpresa(createEmpresaDto: CreateEmpresaDto) {
   const usuario = await this.prisma.usuario.findUnique({ where: {
    usuario_id: createEmpresaDto.usuario_id
   }})

   if(!usuario){
    throw new BadRequestException('O usuário não existe');
   } else {
    const empresa = await this.prisma.empresa.findUnique({where: {
    empresa_cnpj: createEmpresaDto.empresa_cnpj
   }})

   if(empresa){
     throw new BadRequestException('A empresa já existe');
   } else {
    const createdEmpresa = await this.prisma.empresa.create({ data: createEmpresaDto})
    return createdEmpresa
   }
  }}

}
