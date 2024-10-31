import { config } from '@demonicattack/eslint';

export default config({
    js: {
        configurations: {
            onEslintAirBnbBaseConfigRules: true,
        },
    },
    arca: true,
    // import: {
    //   overrides: {
    //     'import/prefer-default-export': 'off',
    //   }
    // },
    ts: {
        tsconfigPath: 'tsconfig.json',
    },
    prettier: {
        onPrettierRecommendedConfigRules: true,
    },
});
