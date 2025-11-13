import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('register')
  register(@Body() data: any) {
    return this.service.register(data);
  }

  @Post('login')
  login(@Body() data: any) {
    return this.service.login(data);
  }
}
