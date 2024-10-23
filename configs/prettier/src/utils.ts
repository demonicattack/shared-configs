import { createRequire } from 'node:module';

const require: NodeRequire = createRequire(new URL(import.meta.url));

export { require };
