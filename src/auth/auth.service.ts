import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
/** Issues short-lived access tokens for wallet-first users. */
@Injectable()
export class AuthService {
  constructor(private readonly jwt: JwtService) {}
  /** Validates a password hash and returns a signed access token. */
  async signIn(identifier: string, password: string, passwordHash: string): Promise<{ accessToken: string }> {
    if (!passwordHash || !(await bcrypt.compare(password, passwordHash))) throw new UnauthorizedException('Invalid credentials');
    return { accessToken: await this.jwt.signAsync({ sub: identifier }) };
  }
}
