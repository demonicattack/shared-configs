import { eslintPlugin } from '../plugins';
import type { IOptionsOverrides, TFlatConfigItem } from '../types';
import { renameAndFilterRules } from '../utils';

const eslint = async (options: IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {} } = options;
    return [
        {
            name: '@demonicattack/@eslint/rules',
            plugins: {
                ['@eslint']: eslintPlugin,
            },
            rules: {
                ...renameAndFilterRules(eslintPlugin.configs['flat/recommended'].rules, {
                    'eslint-plugin': '@eslint',
                }),
                ...overrides,
            },
        },
    ];
};

export { eslint };
