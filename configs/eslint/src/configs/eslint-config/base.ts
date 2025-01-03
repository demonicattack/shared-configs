import { eslintConfigBaseESLint } from './config';
import { getRulesByConfigName } from './utils';

const eslintConfigBase = {
    eslintComments: {
        rules: getRulesByConfigName('eslint-config-eslint/eslint-comments', eslintConfigBaseESLint),
    },
    js: {
        rules: getRulesByConfigName('eslint-config-eslint/js', eslintConfigBaseESLint),
    },
    jsdoc: {
        rules: getRulesByConfigName('eslint-config-eslint/jsdoc', eslintConfigBaseESLint),
    },
    unicorn: {
        rules: getRulesByConfigName('eslint-config-eslint/unicorn', eslintConfigBaseESLint),
    },
};

export { eslintConfigBase };
