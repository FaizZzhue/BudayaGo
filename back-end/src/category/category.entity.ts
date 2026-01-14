import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Batik } from 'src/batik/batik.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // Satu kategori bisa punya banyak batik
  @OneToMany(() => Batik, (batik) => batik.category)
  batiks: Batik[];
}
