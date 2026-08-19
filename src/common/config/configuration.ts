/** Maps validated environment settings into application configuration. */
export function configuration(): Record<string, unknown> {
  return {
    port: Number(process.env.PORT ?? 3001),
    jwt: { secret: process.env.JWT_SECRET, accessTtl: process.env.JWT_ACCESS_TTL, refreshTtl: process.env.JWT_REFRESH_TTL },
    database: { host: process.env.DB_HOST, port: Number(process.env.DB_PORT ?? 5432), username: process.env.DB_USERNAME, password: process.env.DB_PASSWORD, name: process.env.DB_NAME },
    stellar: { network: process.env.STELLAR_NETWORK, horizonUrl: process.env.HORIZON_URL, sorobanRpcUrl: process.env.SOROBAN_RPC_URL },
  };
}
