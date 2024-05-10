import { Injectable } from '@nestjs/common';
import { Adoption } from './entities/adoption.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AdoptionsRepository {
  constructor(private prisma: PrismaService) {}

  async create(adoption: Adoption): Promise<Adoption> {
    return await this.prisma.adoption.create({
      data: adoption,
    });
  }

  async findAll(): Promise<Adoption[]> {
    return await this.prisma.adoption.findMany({});
  }

  async findOne(id: number): Promise<Adoption> {
    return await this.prisma.adoption.findFirst({
      where: { id },
    });
  }

  async update(id: number, adoption: Adoption): Promise<Adoption> {
    return await this.prisma.adoption.update({
      where: {
        id,
      },
      data: adoption,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.adoption.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
