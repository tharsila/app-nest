import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { PetsModule } from './modules/pets/pets.module';
import { AdoptionsModule } from './modules/adoptions/adoptions.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [PrismaModule, UsersModule, PetsModule, AdoptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
