import { eslint } from './src/config';

export default eslint({
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
        recommended: true,
        typescript: true,
    },
    js: {
        configurations: {
            airbnb: true,
            formatter: true,
            recommended: true,
        },
    },
    jsx: true,
    mutation: true,
    next: true,
    perfectionist: true,
    prettier: true,
    promise: true,
    react: {
        a11y: true,
        airbnb: true,
    },
    regexp: true,
    sonarjs: true,
    ts: {
        tsconfigPath: 'tsconfig.json',
    },
    tw: true,
    unicorn: {
        recommended: true,
    },
});
