import { config } from './src/config';

export default config({
    /**
     * By default, the plugins is enabled
     */
    node: true,
    arca: true,
    comments: true,
    /**
     * By default, the plugins is enabled if the current package is in your project
     * @example typescript, react, tailwindcss, etc
     */
    eslint: true,
    esx: true,
    ignores: [
        'typegen.d.ts',
        '.eslint-config-inspector',
    ],
    import: {
        overrides: {},
        react: true,
        typescript: true,
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

    /**
     * By default, the plugins is disabled
     */
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

    ts: true,
    tw: true,
    unicorn: {
        base: true,
        overrides: {},
        recommended: true,
    },
});
