import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsRepository {
  constructor(private prisma: PrismaService) {}

  async create(pet: Pet): Promise<Pet> {
    const createdPet = await this.prisma.pet.create({
      data: pet,
    });

    return createdPet;
  }

  async findAll(): Promise<Pet[]> {
    return await this.prisma.pet.findMany();
  }

  async findById(id: number): Promise<Pet> {
    return await this.prisma.pet.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, pet: Pet): Promise<Pet> {
    return await this.prisma.pet.update({
      where: {
        id,
      },
      data: pet,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.pet.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
