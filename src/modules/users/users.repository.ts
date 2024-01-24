import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: user,
    });

    return {
      ...createdUser,
      password: undefined,
    };
  }

  async findAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOneUser(id: number): Promise<User> {
    return await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async updateUser(id: number, user: User): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data: user,
    });
  }

  async removeUser(id: number): Promise<void> {
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
}
