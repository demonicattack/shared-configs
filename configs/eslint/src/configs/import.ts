import { eslintImportPlugin, eslintSimpleImportSortPlugin } from '../plugins';
import type { IOptionsImport, IOptionsOverrides, TFlatConfigItem } from '../types';
import { renameAndFilterRules } from '../utils';

import { airbnbBaseImports } from './airbnb';

const imrt = async (options: IOptionsImport & IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { airbnb = false, overrides = {}, recommended = true, typescript = false } = options;

    const recommendedRules = renameAndFilterRules(eslintImportPlugin.flatConfigs.recommended.rules, {
        import: '@import',
    });
    const airbnbRules = renameAndFilterRules(airbnbBaseImports.rules, {
        import: '@import',
    });

    return [
        {
            name: '@demonicattack/@import/setup',
            plugins: {
                ['@import']: eslintImportPlugin,
                ['@simple-import-sort']: eslintSimpleImportSortPlugin,
            },
        },
        {
            name: '@demonicattack/@import/rules',
            rules: {
                ...(recommended ? recommendedRules : {}),
                ...(airbnb ? airbnbRules : {}),
                '@import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
                '@import/export': 'off',
                '@import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        js: 'never',
                        jsx: 'never',
                        mjs: 'never',
                        ...(typescript ?
                            {
                                ts: 'never',
                                tsx: 'never',
                            }
                        :   {}),
                    },
                ],
                '@import/order': 'off',
                '@import/prefer-default-export': 'off',
                '@simple-import-sort/exports': 'error',
                '@simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            ['^react', '^next', '^\\w'],
                            ['^@app(/.*|$)'],
                            ['^@store(/.*|$)'],
                            ['^@components(/.*|$)'],
                            ['^@ui(/.*|$)'],
                            ['^@lib(/.*|$)'],
                            ['^@pages(/.*|$)'],
                            ['^@routes(/.*|$)'],
                            ['^@layouts(/.*|$)'],
                            ['^@widgets(/.*|$)'],
                            ['^@features(/.*|$)'],
                            ['^@entities(/.*|$)'],
                            ['^@utils(/.*|$)'],
                            ['^@assets(/.*|$)'],
                            ['^@helpers(/.*|$)'],
                            ['^@hooks(/.*|$)'],
                            ['^@providers(/.*|$)'],
                            ['^@services(/.*|$)'],
                            ['^@shared(/.*|$)'],
                            ['^\\u0000'],
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                            ['^.+\\.?(css)$'],
                        ],
                    },
                ],
                /**
                 * TypeScript compilation already ensures that named imports exist in the referenced module
                 */
                ...(typescript ?
                    {
                        '@import/named': 'off',
                    }
                :   {}),
                ...overrides,
            },
            settings: {
                ...(airbnb ? airbnbBaseImports.settings : {}),
                'import/extensions': ['.js', '.jsx', ...(typescript ? ['.ts', '.tsx'] : [])],
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
                },
                'import/resolver': {
                    node: {
                        extensions: [...(typescript ? ['.ts', '.tsx'] : []), '.js', '.jsx', '.json'],
                    },
                    ...(typescript ?
                        {
                            typescript: {
                                alwaysTryTypes: true,
                            },
                        }
                    :   {}),
                },
            },
        },
    ];
};

export { imrt };
