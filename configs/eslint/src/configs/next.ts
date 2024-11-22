import { eslintNextPlugin }                        from '../plugins';
import type { IOptionsOverrides, TFlatConfigItem } from '../types';

const next = async (options: IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {} } = options;

    return [
        {
            name: 'next/rules',
            plugins: {
                '@next/next': eslintNextPlugin,
            },
            rules: {
                ...eslintNextPlugin.configs.recommended.rules,
                ...overrides,
            },
        },
    ];
};

export { next };
