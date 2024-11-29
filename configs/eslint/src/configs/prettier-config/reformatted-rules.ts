import { eslintPrettierConfig } from './config';
import { reformattedRules } from './utils';

const prettierReformattedRules = {
    ...reformattedRules(eslintPrettierConfig.rules),
};

export { prettierReformattedRules };
