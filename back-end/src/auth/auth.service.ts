import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async register(data: { email: string; password: string; confirm_password: string;}) {
    const { email, password, confirm_password} = data;

    if (password !== confirm_password) {
      throw new BadRequestException('Kata sandi tidak cocok');
    }

    const existingUser = await this.userRepo.findOne({ where: { email } });
    if (existingUser) throw new BadRequestException('Email sudah terdaftar');

    const hashed = await bcrypt.hash(password, 10);
    const user = this.userRepo.create({ email: email, password: hashed});
    await this.userRepo.save(user);

    return { message: 'Registrasi berhasil' };
  }

  async login(data: { email: string; password: string }) {
    const user = await this.userRepo.findOne({ where: { email: data.email } });
    if (!user) throw new UnauthorizedException('Email tidak ditemukan');

    const valid = await bcrypt.compare(data.password, user.password);
    if (!valid) throw new UnauthorizedException('Kata sandi salah');

    const token = this.jwtService.sign({ id: user.id, email: user.email });
    return { message: 'Login berhasil', token };
  }
}
