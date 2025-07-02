import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { EmpresaModule } from './empresa/empresa.module';
import { DesenvolvedorModule } from './desenvolvedor/desenvolvedor.module';
@Module({
  imports: [UsuarioModule, EmpresaModule, DesenvolvedorModule],
})
export class AppModule {}

