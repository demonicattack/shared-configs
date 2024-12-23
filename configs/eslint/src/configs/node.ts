import { eslintNodePlugin } from '../plugins';
import type { IOptionsOverrides, TFlatConfigItem } from '../types';
import { renameAndFilterRules } from '../utils';

import { eslintConfigNode } from './eslint-config';

const node = async (options: IOptionsOverrides = {}): Promise<TFlatConfigItem[]> => {
    const { overrides = {} } = options;

    return [
        {
            name: '@demonicattack/@node/rules',
            plugins: {
                ['@node']: eslintNodePlugin,
            },
            rules: {
                ...renameAndFilterRules(eslintConfigNode.cjs.rules ?? {}, {
                    n: '@node',
                }),
                ...renameAndFilterRules(eslintConfigNode.esm.rules ?? {}, {
                    n: '@node',
                }),
                ...overrides,
            },
        },
    ];
};

export { node };
