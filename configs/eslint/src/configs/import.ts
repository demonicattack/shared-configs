import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '../constants';
import { eslintImportPlugin, eslintSimpleImportSortPlugin } from '../plugins';
import type { IOptionsImport, IOptionsOverrides, TFlatConfigItem } from '../types';
import { interopDefault, renameRules } from '../utils';

import { airbnbBaseImports } from './airbnb';

const imrt = async (options: IOptionsImport & IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {}, typescript = true } = options;

    const tsParser = await interopDefault(import('@typescript-eslint/parser'));

    return [
        {
            name: '@import/setup',
            plugins: {
                ['@import']: eslintImportPlugin,
                ['@simple-import-sort']: eslintSimpleImportSortPlugin,
            },
        },
        {
            name: '@import/rules',
            rules: {
                ...renameRules(eslintImportPlugin.flatConfigs.recommended.rules, {
                    import: '@import',
                }),
                ...renameRules(airbnbBaseImports.rules, {
                    import: '@import',
                }),
                /**
                 * TypeScript compilation already ensures that named imports exist in the referenced module
                 */
                ...(typescript ?
                    {
                        '@import/named': 'off',
                    }
                :   {}),
                '@import/consistent-type-specifier-style': [
                    'error',
                    'prefer-top-level',
                ],
                '@import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        js: 'never',
                        jsx: 'never',
                        mjs: 'never',
                        ts: 'never',
                        tsx: 'never',
                    },
                ],
                '@import/no-dynamic-require': 'warn',
                '@import/no-extraneous-dependencies': 'off',
                '@import/no-useless-path-segments': ['error'],
                '@import/order': 'off',
                '@import/prefer-default-export': 'off',
                '@simple-import-sort/exports': 'error',
                '@simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            [
                                '^react',
                                '^next',
                                '^\\w',
                            ],
                            [
                                '^@app(/.*|$)',
                            ],
                            [
                                '^@store(/.*|$)',
                            ],
                            [
                                '^@components(/.*|$)',
                            ],
                            [
                                '^@ui(/.*|$)',
                            ],
                            [
                                '^@lib(/.*|$)',
                            ],
                            [
                                '^@pages(/.*|$)',
                            ],
                            [
                                '^@routes(/.*|$)',
                            ],
                            [
                                '^@layouts(/.*|$)',
                            ],
                            [
                                '^@widgets(/.*|$)',
                            ],
                            [
                                '^@features(/.*|$)',
                            ],
                            [
                                '^@entities(/.*|$)',
                            ],
                            [
                                '^@utils(/.*|$)',
                            ],
                            [
                                '^@assets(/.*|$)',
                            ],
                            [
                                '^@helpers(/.*|$)',
                            ],
                            [
                                '^@hooks(/.*|$)',
                            ],
                            [
                                '^@providers(/.*|$)',
                            ],
                            [
                                '^@services(/.*|$)',
                            ],
                            [
                                '^@shared(/.*|$)',
                            ],
                            [
                                '^\\u0000',
                            ],
                            [
                                '^\\.\\.(?!/?$)',
                                '^\\.\\./?$',
                            ],
                            [
                                '^\\./(?=.*/)(?!/?$)',
                                '^\\.(?!/?$)',
                                '^\\./?$',
                            ],
                            [
                                '^.+\\.?(css)$',
                            ],
                        ],
                    },
                ],
                ...overrides,
            },
            settings: {
                ...airbnbBaseImports.settings,
                'import/extensions': [
                    ...JAVASCRIPT_FILES,
                    ...TYPESCRIPT_FILES,
                ],
                'import/parsers': {
                    [tsParser.meta.name]: [
                        ...TYPESCRIPT_FILES,
                        '.d.ts',
                    ],
                },
                'import/resolver': {
                    node: {
                        extensions: [
                            ...(typescript ? TYPESCRIPT_FILES : []),
                            ...JAVASCRIPT_FILES,
                            '.json',
                        ],
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
