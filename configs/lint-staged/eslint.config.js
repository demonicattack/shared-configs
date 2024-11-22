import { config } from '@demonicattack/eslint';

export default config({
    ts: {
        tsconfigPath: 'tsconfig.json',
    },
    arca: true,
    prettier: {
        recommended: true,
    },
});
