import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtPayload } from './interfaces/InterfaceAuth';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService,) {}
  async login(createAuthDto: CreateAuthDto) {
    const user = await this.prisma.usuario.findUnique({
      where: { usuario_email: createAuthDto.usuario_email },
    });
    if (!user) {
      throw new BadRequestException('Usuario não existe');
    }
    const comparePassword = await bcrypt.compare(createAuthDto.usuario_senha, user.usuario_senha)
    if(!comparePassword){
      throw new BadRequestException('E-mail ou Senha Invalidos');
    }
    const payload: JwtPayload = {
      userId: user.usuario_id,
      userEmail: createAuthDto.usuario_email,
    };
     return {
      access_token: this.jwtService.sign(payload),
    }
  }


  async googleLogin(user: any) {

    const userExists = await this.prisma.usuario.findUnique({
      where: {usuario_email: user.email},
    });

    if(!userExists) {
      const createdUser = await this.prisma.usuario.create({
        data: {
          usuario_email: user.email,
          usuario_nome: user.firstName,
          //add depois o resto tipo o do avatar tlgd

        }
      })
    }
  }

  async microsoftLogin(microsoftUser: any) {
  const userExists = await this.prisma.usuario.findUnique({
    where: { usuario_email: microsoftUser.email },
  });

  let user;

  if (!userExists) {
    user = await this.prisma.usuario.create({
      data: {
        usuario_email: microsoftUser.email,
        usuario_nome: microsoftUser.name,
       
      },
    });
  } else {
    user = userExists;
  }

  const payload: JwtPayload = {
    userId: user.usuario_id,
    userEmail: user.usuario_email,
  };

  return {
    access_token: this.jwtService.sign(payload),
  };
}
}
