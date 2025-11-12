import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BatikService } from './batik.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('batik')
export class BatikController {
  constructor(private readonly batikService: BatikService) {}

  @Roles('admin', 'user')
  @Get()
  findAll() {
    return this.batikService.findAll();
  }

  @Roles('admin')
  @Post()
  create(
    @Body()
    body: {
      name: string;
      image?: string;
      description?: string;
      origin?: string;
      color?: string;
    },
  ) {
    return this.batikService.create(body);
  }

  @Roles('admin', 'user')
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.batikService.findOne(id);
  }

  @Roles('admin')
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body()
    body: {
      name?: string;
      image?: string;
      description?: string;
      origin?: string;
      color?: string;
    },
  ) {
    return this.batikService.update(id, body);
  }

  @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.batikService.remove(id);
  }
}
