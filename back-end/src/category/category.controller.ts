import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CategoryService } from './category.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Roles('admin', 'user')
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Roles('admin')
  @Post()
  create(@Body() body: { name: string }) {
    return this.categoryService.create(body);
  }

  @Roles('admin', 'user')
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.categoryService.findOne(id);
  }

  @Roles('admin')
  @Put(':id')
  update(@Param('id') id: number, @Body() body: { name?: string }) {
    return this.categoryService.update(id, body);
  }

  @Roles('admin')
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.categoryService.remove(id);
  }
}
