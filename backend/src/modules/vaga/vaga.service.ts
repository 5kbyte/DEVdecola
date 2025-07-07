import { Injectable } from "@nestjs/common";
import { CreateVagaDto } from './dto/create-vaga.dto';
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class VagaService {
  constructor(private prisma: PrismaService) {}

  async createVaga(dto: CreateVagaDto) {
    const vaga = await this.prisma.vaga.create({
      data: {
        ...dto,
        data_fim: dto.data_fim ? new Date(dto.data_fim) : null,
      },
    });

    return vaga;
  }
}