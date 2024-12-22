import { config } from './src/config';

export default config({
    node: true,
    arca: true,
    comments: true,
    eslint: true,
    esx: true,
    ignores: [
        'typegen.d.ts',
        '.eslint-config-inspector',
    ],
    import: {
        airbnb: true,
        overrides: {},
    },
    js: {
        configurations: {
            airbnb: true,
            all: true,
            base: true,
            formatter: true,
            recommended: true,
        },
        overrides: {},
    },
    jsx: true,
    mutation: true,
    next: true,
    perfectionist: true,
    prettier: {
        recommended: true,
    },
    promise: true,
    react: true,
    regexp: true,
    sonarjs: true,
    ts: {
        tsconfigPath: 'tsconfig.json',
    },
    tw: true,
    unicorn: {
        base: true,
        overrides: {},
        recommended: true,
    },
});
