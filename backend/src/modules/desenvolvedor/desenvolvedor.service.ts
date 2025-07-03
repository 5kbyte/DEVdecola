import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDesenvolvedorDto } from './dto/create-desenvolvedor.dto';

@Injectable()
export class DesenvolvedorService {
 constructor(private readonly prisma: PrismaService){}
 async createDesenvoldedor(createDesenvolvedorDto: CreateDesenvolvedorDto) {
    const usuario = await this.prisma.usuario.findUnique({ where: {
       usuario_id: createDesenvolvedorDto.usuario_id
      }})
   
      if(!usuario){
       throw new BadRequestException('O usuário não existe');
      } else {
       const desenvolvedor = await this.prisma.desenvolvedor.findUnique({where: {
        desenvolvedor_cpf: createDesenvolvedorDto.desenvolvedor_cpf
      }})
   
      if(desenvolvedor){
        throw new BadRequestException('A desenvolvedor já existe');
      } else {
       const createdDesenvolvedor = await this.prisma.desenvolvedor.create({ data: createDesenvolvedorDto })
       return createdDesenvolvedor
      }
     }}
  }

  
