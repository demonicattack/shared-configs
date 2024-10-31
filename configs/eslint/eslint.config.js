import { config } from '@demonicattack/eslint';

export default config(
    {
        js: {
            overrides: {
                'curly': 'off',
                'no-undefined': 'off',
                'no-useless-computed-key': 'off',
                'func-style': ['error', 'expression', { allowArrowFunctions: true }],
            },
        },
        ts: {
            tsconfigPath: 'tsconfig.json',
            overridesTypeAware: {
                'ts/no-unsafe-assignment': 'off',
                'ts/no-unsafe-member-access': 'off',
                'ts/strict-boolean-expressions': 'off',
                'ts/no-unsafe-return': 'off',
                'ts/no-explicit-any': 'off',
                'ts/no-unsafe-argument': 'off',
            },
        },
        import: {
            react: false,
            typescript: true,
            overrides: {
                'import/extensions': 'off',
                'import/no-nodejs-modules': 'off',
                'import/prefer-default-export': 'off',
            },
        },
        unicorn: {
            overrides: {
                'unicorn/prefer-string-raw': 'off',
            },
        },
        prettier: false,
        tw: false,
        sonarjs: true,
        arca: true,
        'no-commented-code': true,
    },
    {
        ignores: [
            'typegen.d.ts',
            '.eslint-config-inspector',
        ],
    },
    {
        rules: {
            'sonarjs/deprecation': 'off',
            'sonarjs/todo-tag': 'off',
        },
    },
);
