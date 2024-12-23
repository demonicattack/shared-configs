import { eslintPromisePlugin } from '../plugins';
import type { IOptionsOverrides, TFlatConfigItem } from '../types';
import { renameAndFilterRules } from '../utils';

const promise = async (options: IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {} } = options;

    return [
        {
            name: '@demonicattack/@promise/rules',
            plugins: {
                ['@promise']: eslintPromisePlugin,
            },
            rules: {
                ...renameAndFilterRules(eslintPromisePlugin.configs.recommended.rules, {
                    promise: '@promise',
                }),
                '@promise/always-return': 'off',
                '@promise/catch-or-return': 'off',
                '@promise/no-native': 'off',
                '@promise/no-return-wrap': [
                    'error',
                    { allowReject: true },
                ],
                ...overrides,
            },
        },
    ];
};

export { promise };
