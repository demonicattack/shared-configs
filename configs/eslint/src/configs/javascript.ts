import globals from 'globals';

import { ECMA_VERSION } from '../constants';
import { eslintJsPlugin } from '../plugins';
import type { IOptionsJs, IOptionsOverrides, TFlatConfigItem } from '../types';
import { requireEslintTool } from '../utils';

import { airbnbBaseRules } from './airbnb';
import { eslintConfigBase, eslintConfigformatting } from './eslint-config';

const sharedRules: TFlatConfigItem['rules'] = {
    'accessor-pairs': [
        'error',
        { enforceForClassMembers: true, setWithoutGet: true },
    ],
    'func-style': [
        'error',
        'expression',
    ],
    'no-console': [
        'error',
        {
            allow: [
                'warn',
                'error',
            ],
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
    'no-restricted-syntax': [
        'error',
        'TSEnumDeclaration[const=true]',
        'TSExportAssignment',
    ],
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': [
        'error',
        {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true,
        },
    ],
    'no-use-before-define': [
        'error',
        { classes: false, functions: false, variables: true },
    ],
    'prefer-arrow-callback': [
        'error',
        {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        },
    ],
};

const javascript = async (options: IOptionsJs & IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { configurations = {}, overrides = {} } = options;

    const defaultConfigurations: IOptionsJs['configurations'] = {
        airbnb: false,
        all: false,
        base: true,
        formatter: false,
        recommended: true,
    };

    const {
        airbnb,
        all: onEslintAllConfigRules,
        base,
        formatter,
        recommended: onEslintRecommendedConfigRules,
    } = { ...defaultConfigurations, ...configurations };

    const { all, recommended } = eslintJsPlugin.configs;

    return [
        {
            name: 'js/setup',
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
            name: 'js/rules',
            plugins: {
                ['@js']: eslintJsPlugin,
            },
            rules: {
                ...(onEslintAllConfigRules ? all.rules : {}),
                ...(onEslintRecommendedConfigRules ? recommended.rules : {}),
                ...(base ? eslintConfigBase.js.rules : {}),
                ...(formatter ? eslintConfigformatting.formatting.rules : {}),
                ...(airbnb ? airbnbBaseRules : {}),
                ...sharedRules,
                ...overrides,
            },
        },
    ];
};

export { javascript };
