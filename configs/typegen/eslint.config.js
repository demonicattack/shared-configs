import { config } from '@demonicattack/eslint';
export default config({
    type: 'lib',
    js: {
        configurations: {
            airbnb: true,
        },
    },
    ts: {
        tsconfigPath: 'tsconfig.json',
    },
});
