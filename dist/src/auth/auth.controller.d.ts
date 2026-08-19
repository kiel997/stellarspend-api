import { AuthService } from './auth.service';
/** Credentials submitted to local authentication. */
export declare class SignInDto {
    /** User email. */
    email: string;
    /** Plaintext password validated against bcrypt. */
    password: string;
    /** Stored hash supplied by the users persistence layer. */
    passwordHash: string;
}
/** Exposes authentication endpoints. */
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
    /** Signs in a user and returns a bearer token. */
    login(dto: SignInDto): Promise<{
        accessToken: string;
    }>;
}
