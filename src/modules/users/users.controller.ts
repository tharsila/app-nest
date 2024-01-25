import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.usersService.create(createUserDto);
    } catch (error) {
      console.error(error?.response);
      throw new HttpException(
        error?.response?.message,
        error?.response?.statusCode,
      );
    }
  }

  @Get()
  findAll() {
    try {
      return this.usersService.findAll();
    } catch (error) {
      console.error(error?.response);
      throw new HttpException(
        error?.response?.message,
        error?.response?.statusCode,
      );
    }
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    try {
      return this.usersService.findOne(+id);
    } catch (error) {
      console.error(error?.response);
      throw new HttpException(
        error?.response?.message,
        error?.response?.statusCode,
      );
    }
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.usersService.update(+id, updateUserDto);
    } catch (error) {
      console.error(error?.response);
      throw new HttpException(
        error?.response?.message,
        error?.response?.statusCode,
      );
    }
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    try {
      return this.usersService.remove(+id);
    } catch (error) {
      console.error(error?.response);
      throw new HttpException(
        error?.response?.message,
        error?.response?.statusCode,
      );
    }
  }
}
