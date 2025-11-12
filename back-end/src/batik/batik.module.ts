import { Module } from '@nestjs/common';
import { BatikController } from './batik.controller';
import { BatikService } from './batik.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Batik } from './batik.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Batik])],
  controllers: [BatikController],
  providers: [BatikService]
})
export class BatikModule {}
