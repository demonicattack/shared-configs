import { config } from '@demonicattack/eslint';
// import Config from './dist/index.js';

export default config({
    js: {
        configurations: {
            onEslintAirBnbBaseConfigRules: true,
        },
        overrides: {
            'no-useless-computed-key': 'off',
        },
    },
    ts: {
        tsconfigPath: 'tsconfig.json',
        overridesTypeAware: {
            'ts/no-unsafe-argument': 'off',
        },
    },
    import: {
        overrides: {
            'import/prefer-default-export': 'off',
            'import/no-default-export': 'off',
        },
    },
    sonarjs: true,
    arca: true,
    prettier: {
        onPrettierRecommendedConfigRules: true,
    },
});
