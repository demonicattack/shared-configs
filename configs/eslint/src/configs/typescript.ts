import process from 'node:process';

import { noUnusedVariablesOptions, TYPESCRIPT_FILES } from '../constants';
import type {
    IOptionsComponentExtensions,
    IOptionsFiles,
    IOptionsOverrides,
    IOptionsProjectType,
    IOptionsTypeScriptParserOptions,
    IOptionsTypeScriptWithTypes,
    TFlatConfigItem,
} from '../types';
import { renameRules } from '../utils';

import type { ParserOptions } from '@typescript-eslint/parser';

const typescript = async (
    options: IOptionsComponentExtensions &
        IOptionsFiles &
        IOptionsOverrides &
        IOptionsProjectType &
        IOptionsTypeScriptParserOptions &
        IOptionsTypeScriptWithTypes = {},
): Promise<TFlatConfigItem[]> => {
    const {
        type = 'app',
        componentExtensions = [],
        overrides = {},
        overridesTypeAware = {},
        parserOptions = {},
    } = options;

    const files = [
        ...TYPESCRIPT_FILES,
        ...componentExtensions.map(extension => `**/*${extension}`),
    ];

    const filesTypeAware = options.filesTypeAware ?? [...TYPESCRIPT_FILES];

    const ignoresTypeAware = options.ignoresTypeAware ?? [
        '**/*.md',
    ];

    const tsconfigPath = options.tsconfigPath ?? undefined;
    const isTypeAware = Boolean(tsconfigPath);

    const typeAwareRules: TFlatConfigItem['rules'] = {
        'ts/adjacent-overload-signatures': 'error',
        'ts/array-type': 'error',
        'ts/await-thenable': 'error',
        'ts/ban-ts-comment': 'error',
        'ts/ban-tslint-comment': 'error',
        'ts/class-literal-property-style': 'error',
        'ts/consistent-generic-constructors': 'error',
        'ts/consistent-indexed-object-style': 'error',
        'ts/consistent-type-assertions': 'error',
        'ts/consistent-type-definitions': 'error',
        'ts/dot-notation': [
            'error',
            { allowKeywords: true },
        ],
        'ts/no-array-constructor': 'error',
        'ts/no-array-delete': 'error',
        'ts/no-base-to-string': 'error',
        'ts/no-confusing-non-null-assertion': 'error',
        'ts/no-confusing-void-expression': 'error',
        'ts/no-deprecated': 'error',
        'ts/no-duplicate-enum-values': 'error',
        'ts/no-duplicate-type-constituents': 'error',
        'ts/no-dynamic-delete': 'error',
        'ts/no-empty-function': 'error',
        'ts/no-empty-object-type': 'error',
        'ts/no-explicit-any': 'error',
        'ts/no-extra-non-null-assertion': 'error',
        'ts/no-extraneous-class': 'error',
        'ts/no-floating-promises': 'error',
        'ts/no-for-in-array': 'error',
        'ts/no-implied-eval': 'error',
        'ts/no-inferrable-types': 'error',
        'ts/no-invalid-void-type': 'error',
        'ts/no-meaningless-void-operator': 'error',
        'ts/no-misused-new': 'error',
        'ts/no-misused-promises': 'error',
        'ts/no-mixed-enums': 'error',
        'ts/no-namespace': 'error',
        'ts/no-non-null-asserted-nullish-coalescing': 'error',
        'ts/no-non-null-asserted-optional-chain': 'error',
        'ts/no-non-null-assertion': 'error',
        'ts/no-redundant-type-constituents': 'error',
        'ts/no-require-imports': 'error',
        'ts/no-this-alias': 'error',
        'ts/no-unnecessary-boolean-literal-compare': 'error',
        'ts/no-unnecessary-condition': 'error',
        'ts/no-unnecessary-template-expression': 'error',
        'ts/no-unnecessary-type-arguments': 'error',
        'ts/no-unnecessary-type-assertion': 'error',
        'ts/no-unnecessary-type-constraint': 'error',
        'ts/no-unnecessary-type-parameters': 'error',
        'ts/no-unsafe-argument': 'error',
        'ts/no-unsafe-assignment': 'error',
        'ts/no-unsafe-call': 'error',
        'ts/no-unsafe-declaration-merging': 'error',
        'ts/no-unsafe-enum-comparison': 'error',
        'ts/no-unsafe-function-type': 'error',
        'ts/no-unsafe-member-access': 'error',
        'ts/no-unsafe-return': 'error',
        'ts/no-unsafe-unary-minus': 'error',
        'ts/no-unused-expressions': 'error',
        'ts/no-unused-vars': 'error',
        'ts/no-useless-constructor': 'error',
        'ts/no-wrapper-object-types': 'error',
        'ts/non-nullable-type-assertion-style': 'error',
        'ts/only-throw-error': 'error',
        'ts/prefer-as-const': 'error',
        'ts/prefer-find': 'error',
        'ts/prefer-for-of': 'error',
        'ts/prefer-function-type': 'error',
        'ts/prefer-includes': 'error',
        'ts/prefer-literal-enum-member': 'error',
        'ts/prefer-namespace-keyword': 'error',
        'ts/prefer-nullish-coalescing': 'error',
        'ts/prefer-optional-chain': 'error',
        'ts/prefer-promise-reject-errors': 'error',
        'ts/prefer-reduce-type-parameter': 'error',
        'ts/prefer-regexp-exec': 'error',
        'ts/prefer-return-this-type': 'error',
        'ts/prefer-string-starts-ends-with': 'error',
        'ts/promise-function-async': 'error',
        'ts/require-await': 'error',
        'ts/restrict-plus-operands': 'error',
        'ts/restrict-template-expressions': 'error',
        'ts/return-await': [
            'error',
            'error-handling-correctness-only',
        ],
        'ts/strict-boolean-expressions': [
            'error',
            { allowNullableBoolean: true, allowNullableObject: true },
        ],
        'ts/switch-exhaustiveness-check': 'error',
        'ts/unbound-method': 'error',
        'ts/unified-signatures': 'error',
        'ts/use-unknown-in-catch-callback-variable': 'error',
    };

    const parserModule = await import('@typescript-eslint/parser');
    const eslintModule = await import('@typescript-eslint/eslint-plugin');
    const tsParser = parserModule.default;
    const tsPlugin = eslintModule.default;

    const parser = (typeAware: boolean, f: string[], ignores?: string[]): TFlatConfigItem => ({
        files: f,
        ...(ignores ? { ignores } : {}),
        name: `ts/${typeAware ? 'type-aware-parser' : 'parser'}`,
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                extraFileExtensions: componentExtensions.map(extension => `.${extension}`),
                sourceType: 'module',
                ...(typeAware ?
                    {
                        projectService: {
                            allowDefaultProject: ['./*.js'],
                            defaultProject: tsconfigPath,
                        },
                        tsconfigRootDir: process.cwd(),
                    }
                :   {}),
                ...parserOptions,
            } as ParserOptions,
        },
    });

    const recommendedRules = tsPlugin.configs['eslint-recommended']?.overrides?.[0]?.rules;
    const strictRules = tsPlugin.configs.strict?.rules;

    return [
        {
            name: 'ts/setup',
            plugins: {
                ['ts']: tsPlugin,
            },
        },
        ...(isTypeAware ? [parser(true, filesTypeAware, ignoresTypeAware)] : []),
        {
            name: 'ts/rules',
            files,
            rules: {
                ...renameRules(recommendedRules ?? {}, {
                    '@typescript-eslint': 'ts',
                }),
                ...renameRules(strictRules ?? {}, {
                    '@typescript-eslint': 'ts',
                }),
                'ts/ban-ts-comment': 'error',
                'ts/consistent-type-definitions': [
                    'error',
                    'interface',
                ],
                'ts/consistent-type-imports': [
                    'error',
                    {
                        disallowTypeAnnotations: false,
                        prefer: 'type-imports',
                    },
                ],
                'ts/no-array-constructor': 'error',
                'ts/no-duplicate-enum-values': 'error',
                'ts/no-dynamic-delete': 'error',
                'ts/no-empty-object-type': 'error',
                'ts/no-explicit-any': 'error',
                'ts/no-extra-non-null-assertion': 'error',
                'ts/no-extraneous-class': 'error',
                'ts/no-invalid-void-type': 'error',
                'ts/no-misused-new': 'error',
                'ts/no-namespace': 'error',
                'ts/no-non-null-asserted-nullish-coalescing': 'error',
                'ts/no-non-null-asserted-optional-chain': 'error',
                'ts/no-require-imports': 'error',
                'ts/no-this-alias': 'error',
                'ts/no-unnecessary-type-constraint': 'error',
                'ts/no-unsafe-declaration-merging': 'error',
                'ts/no-unsafe-function-type': 'error',
                'ts/no-unused-expressions': 'error',
                'ts/no-unused-vars': [
                    'error',
                    noUnusedVariablesOptions as any,
                ],
                'ts/no-useless-constructor': 'error',
                'ts/no-wrapper-object-types': 'error',
                'ts/prefer-as-const': 'error',
                'ts/prefer-literal-enum-member': 'error',
                'ts/prefer-namespace-keyword': 'error',
                'ts/triple-slash-reference': 'error',
                'ts/unified-signatures': 'error',
                ...(type === 'lib' ?
                    {
                        'ts/explicit-function-return-type': [
                            'error',
                            {
                                allowExpressions: true,
                                allowHigherOrderFunctions: true,
                                allowIIFEs: true,
                            },
                        ],
                    }
                :   {}),
                ...overrides,
            },
        },
        ...(isTypeAware ?
            [
                {
                    name: 'ts/rules-type-aware',
                    files: filesTypeAware,
                    ignores: ignoresTypeAware,
                    rules: {
                        ...typeAwareRules,
                        ...overridesTypeAware,
                    },
                },
            ]
        :   []),
    ];
};

export { typescript };
