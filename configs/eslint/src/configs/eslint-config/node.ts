import { eslintConfigCjsESLint } from './config';
import { getRulesByConfigName } from './utils';

const eslintConfigNode = {
    cjs: {
        rules: getRulesByConfigName('eslint-config-eslint/cjs', eslintConfigCjsESLint),
    },
    esm: {
        rules: getRulesByConfigName('eslint-config-eslint/esm', eslintConfigCjsESLint),
    },
};

export { eslintConfigNode };
