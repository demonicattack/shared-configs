import { eslint } from './dist/index.js';
export default eslint({
    ignores: [
        'typegen.d.ts',
        '.eslint-config-inspector',
    ],
    type: 'lib',
    js: {
        configurations: {
            airbnb: true,
        },
        overrides: {
            'no-useless-computed-key': 'off',
        },
    },
    import: {
        airbnb: true,
    },
    sonarjs: true,
    ts: {
        tsconfigPath: 'tsconfig.json',
        overridesTypeAware: {
            '@ts/no-deprecated': 'off',
            '@ts/require-await': 'off',
            '@ts/no-explicit-any': 'off',
            '@ts/no-unsafe-return': 'off',
            '@ts/no-unsafe-argument': 'off',
            '@ts/no-unsafe-assignment': 'off',
            '@ts/promise-function-async': 'off',
            '@ts/no-unsafe-member-access': 'off',
            '@ts/strict-boolean-expressions': 'off',
        },
    },
    prettier: true,
});
