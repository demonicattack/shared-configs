import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '../constants';
import type { TFlatConfigItem } from '../types';

const jsx = async (): Promise<TFlatConfigItem[]> => [
    {
        name: '@demonicattack/@jsx/setup',
        files: [
            ...JAVASCRIPT_FILES,
            ...TYPESCRIPT_FILES,
        ],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
];

export { jsx };
