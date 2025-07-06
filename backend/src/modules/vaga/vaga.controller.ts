import { Controller,  Post, Body, Get } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { CreateVagaDto } from './dto/create-vaga.dto';

@Controller('vaga')
export class VagaController {
  constructor(private readonly vagaService: VagaService) {}

  @Post()
  create(@Body() createVagaDto: CreateVagaDto) {
    return this.vagaService.createVaga(createVagaDto);
  }

}
