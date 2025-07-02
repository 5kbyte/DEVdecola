import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcypt from "bcrypt"

@Injectable()
export class UsuarioService {

  constructor(private readonly prisma: PrismaService){}

  async createUser(createUsuarioDto: CreateUsuarioDto) {
    const protectedUser: CreateUsuarioDto = {
      ...createUsuarioDto,
      usuario_senha: await bcypt.hash(createUsuarioDto.usuario_senha, 10)
    }
    const createdUser = await this.prisma.usuario.create({data: protectedUser}) 
    return createdUser
  }

  async findUserByEmail (uniqueEmail: string){
    return await this.prisma.
  }
}
