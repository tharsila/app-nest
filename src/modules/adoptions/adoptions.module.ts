import { Module } from '@nestjs/common';
import { AdoptionsService } from './adoptions.service';
import { AdoptionsController } from './adoptions.controller';
import { AdoptionsRepository } from './adoptions.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { UsersRepository } from '../users/users.repository';
import { PetsRepository } from '../pets/pets.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AdoptionsController],
  providers: [
    AdoptionsService,
    AdoptionsRepository,
    UsersRepository,
    PetsRepository,
  ],
})
export class AdoptionsModule {}
