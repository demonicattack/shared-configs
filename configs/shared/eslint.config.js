import { eslint } from '@demonicattack/eslint';
export default eslint({
    type: 'lib',
    js: {
        configurations: {
            airbnb: true,
        },
    },
    import: {
        airbnb: true,
    },
    ts: {
        tsconfigPath: 'tsconfig.json',
        overridesTypeAware: {
            '@ts/no-explicit-any': 'off',
        },
    },
});
