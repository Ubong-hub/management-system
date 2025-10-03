import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/jwtStrategy/jwt.strategy';
import { User } from './entities/user.entity';



@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET  || 'fallbackSecret',
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: true,
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy], 
   exports: [PassportModule, UserService, JwtStrategy],  
})
export class UserModule {}

