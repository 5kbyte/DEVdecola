import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  createUser(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }
}
