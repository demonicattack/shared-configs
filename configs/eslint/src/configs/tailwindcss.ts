import { eslintTailwindcssPlugin } from '../plugins';
import type { IOptionsOverrides, TFlatConfigItem } from '../types';
import { renameAndFilterRules } from '../utils';

const tailwindcss = async (options: IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {} } = options;

    return [
        {
            name: '@demonicattack/@tw/rules',
            plugins: {
                ['@tw']: eslintTailwindcssPlugin,
            },
            rules: {
                ...renameAndFilterRules(eslintTailwindcssPlugin.configs.recommended.rules, {
                    tailwindcss: '@tw',
                }),
                '@tw/classnames-order': 'warn',
                '@tw/enforces-negative-arbitrary-values': 'warn',
                '@tw/enforces-shorthand': 'warn',
                '@tw/migration-from-tailwind-2': 'warn',
                '@tw/no-arbitrary-value': 'off',
                '@tw/no-contradicting-classname': 'error',
                '@tw/no-custom-classname': 'warn',
                '@tw/no-unnecessary-arbitrary-value': 'warn',
                ...overrides,
            },
        },
    ];
};

export { tailwindcss };
