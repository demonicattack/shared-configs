import { eslintSonarjsPlugin } from '../plugins';
import type { IOptionsOverrides, TFlatConfigItem } from '../types';
import { renameAndFilterRules } from '../utils';

const sonarjs = async (options: IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {} } = options;

    return [
        {
            name: '@demonicattack/@sonarjs/rules',
            plugins: {
                ['@sonarjs']: eslintSonarjsPlugin,
            },
            rules: {
                ...renameAndFilterRules(eslintSonarjsPlugin.configs.recommended.rules, {
                    sonarjs: '@sonarjs',
                }),
                '@sonarjs/cognitive-complexity': 'off',
                '@sonarjs/no-duplicate-string': 'off',
                '@sonarjs/no-nested-template-literals': 'off',
                '@sonarjs/prefer-immediate-return': 'off',
                '@sonarjs/prefer-single-boolean-return': 'off',
                ...overrides,
            },
        },
    ];
};

export { sonarjs };
