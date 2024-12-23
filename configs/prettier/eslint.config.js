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
            '@ts/no-unsafe-return': 'off',
            '@ts/strict-boolean-expressions': 'off',
            '@ts/no-unsafe-member-access': 'off',
            '@ts/no-explicit-any': 'off',
        },
    },
    /**
     * @detect "prettier-plugin-tailwindcss"
     */
    tw: false,
});
