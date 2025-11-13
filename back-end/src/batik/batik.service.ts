import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Batik } from './batik.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BatikService {
    constructor(
        @InjectRepository(Batik)
        private batikRepo: Repository<Batik>,   
    ) {}

  findAll() {
    return this.batikRepo.find({
      relations: ['category'],
    });
  }

  create(data: Partial<Batik>) {
    const newBatik = this.batikRepo.create(data);
    return this.batikRepo.save(newBatik);
  }

  findOne(id: number) {
    return this.batikRepo.findOneBy({ id });
  }

  update(id: number, data: Partial<Batik>) {
    return this.batikRepo.update(id, data);
  }

  remove(id: number) {
    return this.batikRepo.delete(id);
  }
}
