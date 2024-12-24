import { createRequire } from 'node:module';

import type {
    Awaitable,
    TOverride,
    TPrettierOptions,
    // TVendoredPrettierOptions, TVendoredPrettierRuleOptions
} from './types';

const requirePrettierTool = createRequire(new URL(import.meta.url));

const interopDefault = async <T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> => {
    const resolved = await m;
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

/** FIXME: TYPES!!! */
// const mergePrettierOptions = (
//   options: TVendoredPrettierOptions,
//   overrides: TVendoredPrettierRuleOptions = {},
// ): TVendoredPrettierRuleOptions => {
//   return {
//     ...options,
//     ...overrides,
//     plugins: [
//       ...(overrides.plugins || []),
//       ...(options.plugins || []),
//     ],
//   }
// }

export {
    createOverride,
    // mergePrettierOptions,
    interopDefault,
    requirePrettierTool,
    resolvePlugins,
};
