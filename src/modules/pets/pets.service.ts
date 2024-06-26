import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetsRepository } from './pets.repository';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(private petsRepository: PetsRepository) {}
  async create(createPetDto: CreatePetDto): Promise<Pet> {
    return await this.petsRepository.create(createPetDto);
  }

  async findAll(): Promise<Pet[]> {
    return await this.petsRepository.findAll();
  }

  async findOne(id: number): Promise<Pet> {
    return await this.petsRepository.findById(id);
  }

  async update(id: number, updatePetDto: UpdatePetDto): Promise<Pet> {
    return await this.petsRepository.update(id, updatePetDto);
  }

  async remove(id: number): Promise<void> {
    await this.petsRepository.remove(id);
  }
}
