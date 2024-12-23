import { eslintNextPlugin } from '../plugins';
import type { IOptionsOverrides, TFlatConfigItem } from '../types';
import { renameAndFilterRules } from '../utils';

const next = async (options: IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {} } = options;

    return [
        {
            name: '@demonicattack/@next/rules',
            plugins: {
                ['@next/next']: eslintNextPlugin,
            },
            rules: {
                ...renameAndFilterRules(eslintNextPlugin.configs.recommended.rules, {
                    '@next/next': '@next',
                }),
                ...overrides,
            },
        },
    ];
};

export { next };
