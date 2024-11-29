// eslint-disable-next-line import/no-nodejs-modules
import { createRequire } from 'node:module';

import type { TOverride, TPrettierOptions } from './types';

const requirePrettierTool = createRequire(new URL(import.meta.url));

const createOverride = <T>(files: string | string[], options: Partial<T & TPrettierOptions>): TOverride<T> => ({
    files,
    options,
});

const resolvePlugins = (plugins: string | string[]): string[] => {
    const pluginList = Array.isArray(plugins) ? plugins : [plugins];
    return pluginList.map(plugin => import.meta.resolve(plugin));
};

export { createOverride, requirePrettierTool, resolvePlugins };
