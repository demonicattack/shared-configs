import { eslintUnicornPlugin } from '../plugins';
import type { IOptionsOverrides, IOptionsUnicorn, TFlatConfigItem } from '../types';
import { renameAndFilterRules } from '../utils';

import { eslintConfigBase } from './eslint-config';

const unicorn = async (options: IOptionsOverrides & IOptionsUnicorn = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {}, recommended = true } = options;

    return [
        {
            name: '@demonicattack/@unicorn/rules',
            plugins: {
                ['@unicorn']: eslintUnicornPlugin,
            },
            rules: {
                ...(recommended ?
                    {
                        ...renameAndFilterRules(eslintUnicornPlugin.configs['flat/recommended'].rules ?? {}, {
                            unicorn: '@unicorn',
                        }),
                        ...renameAndFilterRules(eslintConfigBase.unicorn.rules ?? {}, {
                            unicorn: '@unicorn',
                        }),
                    }
                :   {}),
                '@unicorn/consistent-destructuring': 'off',
                '@unicorn/consistent-empty-array-spread': 'error',
                '@unicorn/consistent-function-scoping': 'warn',
                '@unicorn/error-message': 'error',
                '@unicorn/escape-case': 'error',
                '@unicorn/expiring-todo-comments': 'warn',
                '@unicorn/explicit-length-check': ['error', { 'non-zero': 'not-equal' }],
                '@unicorn/import-index': 'off',
                '@unicorn/import-style': [
                    'error',
                    {
                        styles: {
                            'node:path': {
                                named: true,
                                namespace: true,
                            },
                            path: {
                                named: true,
                                namespace: true,
                            },
                        },
                    },
                ],
                '@unicorn/new-for-builtins': 'error',
                '@unicorn/no-array-callback-reference': 'warn',
                '@unicorn/no-array-reduce': 'off',
                '@unicorn/no-for-loop': 'warn',
                '@unicorn/no-instanceof-array': 'error',
                '@unicorn/no-new-array': 'error',
                '@unicorn/no-new-buffer': 'error',
                '@unicorn/no-null': 'off',
                '@unicorn/no-object-as-default-parameter': 'off',
                '@unicorn/no-process-exit': 'warn',
                '@unicorn/no-unnecessary-polyfills': 'off',
                '@unicorn/number-literal-case': 'error',
                '@unicorn/prefer-add-event-listener': 'off',
                '@unicorn/prefer-default-parameters': 'off',
                '@unicorn/prefer-dom-node-append': 'off',
                '@unicorn/prefer-dom-node-dataset': 'off',
                '@unicorn/prefer-dom-node-remove': 'off',
                '@unicorn/prefer-dom-node-text-content': 'error',
                '@unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
                '@unicorn/prefer-includes': 'error',
                '@unicorn/prefer-json-parse-buffer': 'error',
                '@unicorn/prefer-modern-dom-apis': 'off',
                '@unicorn/prefer-module': 'off',
                '@unicorn/prefer-node-protocol': 'error',
                '@unicorn/prefer-number-properties': 'error',
                '@unicorn/prefer-query-selector': 'off',
                '@unicorn/prefer-string-raw': 'off',
                '@unicorn/prefer-string-starts-ends-with': 'error',
                '@unicorn/prefer-ternary': 'off',
                '@unicorn/prefer-type-error': 'error',
                '@unicorn/prevent-abbreviations': [
                    'error',
                    {
                        checkDefaultAndNamespaceImports: true,
                        checkShorthandImports: true,
                        checkShorthandProperties: true,
                    },
                ],
                '@unicorn/relative-url-style': ['error', 'always'],
                '@unicorn/switch-case-braces': ['error', 'avoid'],
                '@unicorn/throw-new-error': 'error',
                ...overrides,
            },
        },
    ];
};

export { unicorn };
