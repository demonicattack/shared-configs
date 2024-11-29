import { eslintPrettierPlugin } from '../plugins';
import type { IOptionsPrettier, TFlatConfigItem } from '../types';

import { prettierReformattedRules } from './prettier-config';

const prettier = async (options: IOptionsPrettier = {}): Promise<TFlatConfigItem[]> => {
    const { recommended = true } = options;

    return [
        {
            name: 'prettier/rules',
            plugins: {
                ['prettier']: eslintPrettierPlugin,
            },
            rules: {
                'prettier/prettier': 'error',
                ...(recommended ? prettierReformattedRules : {}),
            },
        },
    ];
};

export { prettier };
