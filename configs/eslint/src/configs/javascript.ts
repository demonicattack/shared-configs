import globals from 'globals';

import { ECMA_VERSION, noUnusedVariablesOptions } from '../constants';
import { eslintJsPlugin } from '../plugins';
import type { IOptionsJs, IOptionsOverrides, TFlatConfigItem } from '../types';
import { requireEslintTool } from '../utils';

import { airbnbBaseRules } from './airbnb';
import { eslintConfigBase, eslintConfigformatting } from './eslint-config';

const javascript = async (options: IOptionsJs & IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { configurations = {}, overrides = {} } = options;

    const defaultConfigurations: IOptionsJs['configurations'] = {
        airbnb: false,
        formatter: false,
        recommended: true,
    };

    const { airbnb, formatter, recommended } = { ...defaultConfigurations, ...configurations };

    const jsRecommended = eslintConfigBase.js;

    const jsRecommendedFormatting = eslintConfigformatting.formatting;

    const filteredAirbnbRules = Object.fromEntries(
        Object.entries(airbnbBaseRules).filter(
            ([rule]) =>
                typeof jsRecommendedFormatting.rules === 'object' &&
                !Object.hasOwn(jsRecommendedFormatting.rules, rule),
        ),
    );

    return [
        {
            name: '@demonicattack/@js/setup',
            languageOptions: {
                ecmaVersion: ECMA_VERSION,
                globals: {
                    ...globals.browser,
                    ...globals.es2022,
                    ...globals.node,
                    ...globals.serviceworker,
                    document: 'readonly',
                    navigator: 'readonly',
                    window: 'readonly',
                },
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true,
                    },
                    ecmaVersion: ECMA_VERSION,
                    sourceType: 'module',
                },
                sourceType: 'module',
            },
            linterOptions: {
                reportUnusedDisableDirectives: true,
            },
        },
        {
            name: '@demonicattack/@js/rules',
            plugins: {
                ['@js']: eslintJsPlugin,
            },
            rules: {
                ...(recommended ?
                    {
                        ...eslintJsPlugin.configs.recommended.rules,
                        ...jsRecommended.rules,
                    }
                :   {}),
                ...(formatter ? jsRecommendedFormatting.rules : {}),
                ...(airbnb ? filteredAirbnbRules : {}),
                'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],
                'func-style': ['error', 'expression'],
                'no-console': [
                    'error',
                    {
                        allow: ['warn', 'error'],
                    },
                ],
                'no-restricted-globals': [
                    'error',
                    ...requireEslintTool('eslint-restricted-globals'),
                    { name: 'global', message: 'Use `globalThis` instead.' },
                    { name: 'self', message: 'Use `globalThis` instead.' },
                ],
                'no-restricted-properties': [
                    'error',
                    {
                        message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
                        property: '__proto__',
                    },
                    { message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
                    { message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
                    { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupGetter__' },
                    { message: 'Use `Object.getOwnPropertyDescriptor` instead.', property: '__lookupSetter__' },
                ],
                'no-restricted-syntax': ['error', 'TSEnumDeclaration[const=true]', 'TSExportAssignment'],
                'no-unmodified-loop-condition': 'error',
                'no-unused-expressions': [
                    'error',
                    {
                        allowShortCircuit: true,
                        allowTaggedTemplates: true,
                        allowTernary: true,
                    },
                ],
                'no-unused-vars': ['error', noUnusedVariablesOptions as any],
                'no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
                'prefer-arrow-callback': [
                    'error',
                    {
                        allowNamedFunctions: false,
                        allowUnboundThis: true,
                    },
                ],
                ...overrides,
            },
        },
    ];
};

export { javascript };
