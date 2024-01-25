import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    const emailExists = await this.usersRepository.findByEmail(
      createUserDto.email,
    );

    if (!emailExists) {
      const data = {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      };
      return this.usersRepository.createUser(data);
    }

    throw new BadRequestException('Email já cadastrado');
  }

  async findAll() {
    return await this.usersRepository.findAllUsers();
  }

  async findOne(id: number) {
    const userExists = await this.usersRepository.findById(id);
    if (userExists) {
      return await this.usersRepository.findOneUser(id);
    }

    throw new BadRequestException('Usuário não encontrado');
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userExists = await this.usersRepository.findById(id);

    if (userExists) {
      if (updateUserDto.password) {
        const data = {
          ...updateUserDto,
          password: await bcrypt.hash(updateUserDto.password, 10),
        };
        return await this.usersRepository.updateUser(id, data);
      }
      return await this.usersRepository.updateUser(id, updateUserDto);
    }

    throw new BadRequestException('Usuário não encontrado');
  }

  async remove(id: number) {
    const userExists = this.usersRepository.findById(id);

    if (userExists) {
      return await this.usersRepository.removeUser(id);
    }

    throw new BadRequestException('Usuário não encontrado');
  }
}
