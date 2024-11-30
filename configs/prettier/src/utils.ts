// eslint-disable-next-line import/no-nodejs-modules
import { createRequire } from 'node:module';

import type { Awaitable, TOverride, TPrettierOptions } from './types';

const requirePrettierTool = createRequire(new URL(import.meta.url));

const interopDefault = async <T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> => {
    const resolved = await m;
    // eslint-disable-next-line ts/no-unsafe-return, ts/strict-boolean-expressions, ts/no-explicit-any, ts/no-unsafe-member-access
    return (resolved as any).default || resolved;
};

const createOverride = <T>(files: string | string[], options: Partial<T & TPrettierOptions>): TOverride<T> => ({
    files,
    options,
});

const resolvePlugins = (plugins: string | string[]): string[] => {
    const pluginList = Array.isArray(plugins) ? plugins : [plugins];
    return pluginList.map(plugin => import.meta.resolve(plugin));
};

export { createOverride, interopDefault, requirePrettierTool, resolvePlugins };
