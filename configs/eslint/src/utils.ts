import { isPackageExists } from 'local-pkg';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

import type { Awaitable, TFlatConfigItem } from './types';

const scopeUrl = fileURLToPath(new URL('.', import.meta.url));
const requireEslintTool = createRequire(new URL(import.meta.url));

const isPackageInScope = (name: string): boolean => isPackageExists(name, { paths: [scopeUrl] });

const toArray = <T>(value: T | T[]): T[] => (Array.isArray(value) ? value : [value]);

const isBoolean = (value: unknown): boolean => typeof value === 'boolean';

const combine = async (...configs: Awaitable<TFlatConfigItem | TFlatConfigItem[]>[]): Promise<TFlatConfigItem[]> => {
    const result = await Promise.all(configs);

    return result.flat();
};

const interopDefault = async <T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> => {
    const resolved = await m;

    return (resolved as any).default || resolved;
};

const renameAndFilterRules = (rules: Record<string, any>, map: Record<string, string>): Record<string, any> =>
    Object.fromEntries(
        Object.entries(rules).map(
            ([
                key,
                value,
            ]) => {
                for (const [
                    from,
                    to,
                ] of Object.entries(map)) {
                    if (key.startsWith(`${from}/`)) {
                        return [
                            to + key.slice(from.length),
                            value,
                        ];
                    }
                }
                return [
                    key,
                    value,
                ];
            },
        ),
        // .filter(
        //     ([
        //         _,
        //         value,
        //     ]) => {
        //         if (value === 'off') return false;
        //         if (Array.isArray(value) && value[0] === 'off') return false;
        //         return true;
        //     },
        // ),
    );

export { combine, interopDefault, isBoolean, isPackageInScope, renameAndFilterRules, requireEslintTool, toArray };
