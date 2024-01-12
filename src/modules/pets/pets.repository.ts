import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsRepository {
  constructor(private prisma: PrismaService) {}

  async createPet(pet: Pet): Promise<Pet> {
    const createdPet = await this.prisma.pet.create({
      data: pet,
    });

    return createdPet;
  }
}
