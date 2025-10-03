import { Controller, Post, Body, Res, Req, Get } from '@nestjs/common';
import type { Request, Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class UserController {
  //the first thing i am doing here is to inject the user service in my controller
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser() {
    return [{ id: 1, name: 'Ubong' }];
  }
  //do the signup and the login, abi?
  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('signin')
  async signin(
    @Body() loginDto: LoginDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return this.userService.signIn(loginDto, req, res);
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    return this.userService.logout(req, res);
  }
}
