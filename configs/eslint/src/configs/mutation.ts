import { eslintBetterMutationPlugin } from '../plugins';
import type { IOptionsOverrides, TFlatConfigItem } from '../types';
// import { renameRules } from '../utils';

const mutation = async (options: IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {} } = options;

    return [
        {
            name: '@demonicattack/@mutation/rules',
            plugins: {
                ['@mutation']: eslintBetterMutationPlugin,
            },
            rules: {
                '@mutation/no-mutating-functions': 'error',
                '@mutation/no-mutating-methods': 'error',
                '@mutation/no-mutation': 'error',
                ...overrides,
            },
        },
    ];
};

export { mutation };
