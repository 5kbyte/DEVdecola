import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './interfaces/InterfaceAuth';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const secret = configService.get<string>('JWT_SECRET');
    if (!secret) {
      throw new Error('JWT_SECRET não está definido no .env');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret
    });
  }
  async validate(payload: JwtPayload) {
    const user = await this.prisma.usuario.findUnique({
      where: { usuario_id: payload.userId },
    });

    if (!user) return null;

    const { usuario_senha, ...rest } = user;
    return rest;
  }
}
