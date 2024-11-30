import { config } from '@demonicattack/eslint';
export default config(
    {
        type: 'lib',
        js: {
            configurations: {
                airbnb: true,
            },
            ts: {
                tsconfigPath: 'tsconfig.json',
            },
        },
    },
    {
        files: [
            'src/rules/**/*.ts',
        ],
        rules: {
            'arca/no-default-export': 'off',
            'import/no-default-export': 'off',
        },
    },
);
