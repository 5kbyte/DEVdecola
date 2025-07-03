import { Controller, Post, Body } from '@nestjs/common';
import { DesenvolvedorService } from './desenvolvedor.service';
import { CreateDesenvolvedorDto } from './dto/create-desenvolvedor.dto';


@Controller('desenvolvedor')
export class DesenvolvedorController {
  constructor(private readonly desenvolvedorService: DesenvolvedorService) {}

  @Post()
  create(@Body() createDesenvolvedorDto: CreateDesenvolvedorDto) {
    return this.desenvolvedorService.createDesenvoldedor(createDesenvolvedorDto);
  }

}
