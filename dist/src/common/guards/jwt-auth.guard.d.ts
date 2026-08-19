import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
/** Protects state-changing routes with bearer-token verification. */
export declare class JwtAuthGuard implements CanActivate {
    private readonly jwt;
    constructor(jwt: JwtService);
    /** Verifies the request bearer token. */
    canActivate(context: ExecutionContext): boolean;
}
