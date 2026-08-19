# Centralized configuration

`src/common/config/configuration.ts` maps environment values into structured configuration. `validation.ts` applies Joi validation at startup, while `typed-config.service.ts` provides typed access to modules. This centralization prevents scattered, unvalidated environment reads and makes deployment failures immediate and diagnosable.
