import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepository.find({
      relations: ['batiks'],
    });
  }

  create(data: { name: string }) {
    const category = this.categoryRepository.create(data);
    return this.categoryRepository.save(category);
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({
      where: { id },
      relations: ['batiks'],
    });
  }

  update(id: number, data: { name?: string }) {
    return this.categoryRepository.update(id, data);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
