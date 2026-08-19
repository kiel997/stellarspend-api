import { Body, Controller, Post } from '@nestjs/common';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { AuthService } from './auth.service';
/** Credentials submitted to local authentication. */
export class SignInDto {
  /** User email. */
  @IsEmail() email!: string;
  /** Plaintext password validated against bcrypt. */
  @IsString() @MinLength(8) password!: string;
  /** Stored hash supplied by the users persistence layer. */
  @IsString() passwordHash!: string;
}
/** Exposes authentication endpoints. */
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}
  /** Signs in a user and returns a bearer token. */
  @Post('login') login(@Body() dto: SignInDto): Promise<{ accessToken: string }> { return this.auth.signIn(dto.email, dto.password, dto.passwordHash); }
}
