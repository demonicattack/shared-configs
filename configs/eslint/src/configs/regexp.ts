import * as eslintRegexpPlugin from 'eslint-plugin-regexp';

import type { IOptionsOverrides, TFlatConfigItem } from '../types';
import { renameAndFilterRules } from '../utils';

const regexp = async (options: IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {} } = options;

    return [
        {
            name: '@demonicattack/@regexp/rules',
            plugins: {
                ['@regexp']: eslintRegexpPlugin,
            },
            rules: {
                ...renameAndFilterRules(eslintRegexpPlugin.configs['flat/recommended'].rules, {
                    regexp: '@regexp',
                }),
                '@regexp/match-any': [
                    'error',
                    {
                        allows: [
                            'dotAll',
                            '[\\S\\s]',
                        ],
                    },
                ],
                '@regexp/no-super-linear-move': 'off',
                '@regexp/no-useless-flag': [
                    'error',
                    { strictTypes: false },
                ],
                '@regexp/order-in-character-class': 'off',
                '@regexp/prefer-lookaround': 'off',
                '@regexp/prefer-named-capture-group': 'off',
                '@regexp/require-unicode-regexp': 'off',
                '@regexp/require-unicode-sets-regexp': 'off',
                '@regexp/sort-character-class-elements': 'off',
                '@regexp/strict': 'off',
                ...overrides,
            },
        },
    ];
};

export { regexp };
