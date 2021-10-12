import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/user.create.dto';
import { RegistrationStatus } from './interfaces/regisration-status.interface';
import { UsersService } from '../users/users.service';
import { LoginStatus } from './interfaces/login-status.interface';
import { LoginUserDto } from '../users/dto/user-login.dto';
import { UserDto } from '../users/dto/user.dto';
import { JwtPayload } from './interfaces/payload.interface';
import { JwtService } from '@nestjs/jwt';

let loadedUser;

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };

    try {
      await this.usersService.register(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }

    return status;
  }

  async login(loginUserDto: LoginUserDto): Promise<any> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUserDto);
    loadedUser = user;
    // generate and sign token
    const token = this._createToken(user);
    return {
      user,
      token,
    };
  }
  //auto fetch user ($auth.user)
  async user(): Promise<any> {
    return { user: loadedUser };
  }

  async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private _createToken({ UserName }: UserDto): any {
    const expiresIn = process.env.EXPIRESIN;
    console.log(UserName);
    const user: JwtPayload = { UserName };
    const token = this.jwtService.sign(user);
    return {
      expiresIn,
      token,
    };
  }
}
