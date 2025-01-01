import { eslintArcaPlugin } from '../plugins';
import type { IArca, IOptionsOverrides, TFlatConfigItem } from '../types';

import { fixupPluginRules } from '@eslint/compat';

const arca = async (options: IArca & IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {}, react = false } = options;

    return [
        {
            name: '@demonicattack/@arca/rules',
            plugins: {
                ['@arca']: react ? fixupPluginRules(eslintArcaPlugin) : eslintArcaPlugin,
            },
            rules: {
                '@arca/curly': 'error',
                '@arca/import-quotes': 'error',
                ...(react ?
                    {
                        '@arca/jsx-import-react': 'error',
                    }
                :   {}),
                '@arca/jsx-longhand-props': 'error',
                '@arca/jsx-no-string-styles': 'error',
                '@arca/melted-constructs': 'error',
                '@arca/no-default-export': 'error',
                ...overrides,
            },
        },
    ];
};

export { arca };
