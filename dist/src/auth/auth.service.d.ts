import { JwtService } from '@nestjs/jwt';
/** Issues short-lived access tokens for wallet-first users. */
export declare class AuthService {
    private readonly jwt;
    constructor(jwt: JwtService);
    /** Validates a password hash and returns a signed access token. */
    signIn(identifier: string, password: string, passwordHash: string): Promise<{
        accessToken: string;
    }>;
}
