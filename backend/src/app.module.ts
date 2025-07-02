import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { DesenvolvedorModule } from './modules/desenvolvedor/desenvolvedor.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsuarioModule, EmpresaModule, DesenvolvedorModule, PrismaModule, AuthModule],
})
export class AppModule {}

