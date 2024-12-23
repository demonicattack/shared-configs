import { eslint } from '@demonicattack/eslint';
export default eslint(
    {
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
                '@ts/no-unsafe-assignment': 'off',
                '@ts/no-explicit-any': 'off',
                '@ts/no-unsafe-argument': 'off',
                '@ts/no-unsafe-member-access': 'off',
                '@ts/no-unsafe-call': 'off',
                '@ts/no-unsafe-return': 'off',
            },
        },
    },
    {
        files: [
            'src/rules/**/*.ts',
        ],
        // rules: {
        //     '@arca/no-default-export': 'off',
        //     '@import/no-default-export': 'off',
        // },
    },
);
