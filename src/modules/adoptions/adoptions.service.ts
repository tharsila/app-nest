import { Injectable } from '@nestjs/common';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { AdoptionsRepository } from './adoptions.repository';
import { UsersRepository } from '../users/users.repository';
import { PetsRepository } from '../pets/pets.repository';
import { Adoption } from './entities/adoption.entity';

@Injectable()
export class AdoptionsService {
  constructor(
    private adoptionsRepository: AdoptionsRepository,
    usersRepository: UsersRepository,
    petsRepository: PetsRepository,
  ) {}

  create(createAdoptionDto: CreateAdoptionDto): Promise<Adoption> {
    return this.adoptionsRepository.create(createAdoptionDto);
  }

  findAll() {
    return `This action returns all adoptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adoption`;
  }

  update(id: number, updateAdoptionDto: UpdateAdoptionDto) {
    return `This action updates a #${id} adoption`;
  }

  remove(id: number) {
    return `This action removes a #${id} adoption`;
  }
}
