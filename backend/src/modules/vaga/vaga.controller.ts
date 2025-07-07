import { Controller,  Post, Body, Get } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('vaga')
export class VagaController {
  constructor(private readonly vagaService: VagaService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova vaga' })
  @ApiBearerAuth()
  create(@Body() createVagaDto: CreateVagaDto) {
    return this.vagaService.createVaga(createVagaDto);
  }

}
