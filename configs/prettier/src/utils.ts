// eslint-disable-next-line import/no-nodejs-modules
import { createRequire } from 'node:module';

const r: NodeRequire = createRequire(new URL(import.meta.url));

// eslint-disable-next-line import/prefer-default-export
export { r };
