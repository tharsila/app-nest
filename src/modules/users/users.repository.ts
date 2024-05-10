import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: user,
    });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    return {
      ...user,
      password: undefined,
    };
  }

  async update(id: number, user: User): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: {
        id,
      },
      data: user,
    });

    return {
      ...updatedUser,
      password: undefined,
    };
  }

  async remove(id: number): Promise<void> {
    await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async findById(id: number): Promise<User> {
    return await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }
}
