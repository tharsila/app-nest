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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
