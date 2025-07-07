import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcypt from "bcrypt";

@Injectable()
export class UsuarioService {

  constructor(private readonly prisma: PrismaService){}

  async createUser(createUsuarioDto: CreateUsuarioDto) {
    const protectedUser: CreateUsuarioDto = {
      ...createUsuarioDto,
      usuario_senha: await bcypt.hash(createUsuarioDto.usuario_senha, 10)
    }
    const userExists = await this.prisma.usuario.findUnique({where: {usuario_email: createUsuarioDto.usuario_email}})
    if(userExists){
      throw new BadRequestException('E-mail já está em uso');
    } else {
      const createdUser = await this.prisma.usuario.create({data: protectedUser}) 
      return createdUser
    }
  }

}
