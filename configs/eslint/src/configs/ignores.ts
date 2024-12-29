import { EXCLUDE_PATTERNS } from '../constants';
import type { TFlatConfigItem } from '../types';

const ignores = async (ignore: string[] = []): Promise<TFlatConfigItem[]> => [
    {
        name: '@demonicattack/@files/ignores',
        ignores: [...EXCLUDE_PATTERNS, ...ignore],
    },
];

export { ignores };
