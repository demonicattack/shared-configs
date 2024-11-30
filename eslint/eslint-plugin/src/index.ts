import { name, version } from '../package.json';

import eslintPluginTs from '@demonicattack/eslint-plugin-ts';
import { padKeysLeft } from '@demonicattack/shared';

type Severity = 'error' | 'off' | 'warn';
type RuleDeclaration = [Severity, Record<string, unknown>?] | Severity;
type RulePreset = Record<string, RuleDeclaration>;

// const allPreset = {
//     'interface-prefix': 'error',
// } as const satisfies RulePreset;

const corePreset = {
    'interface-prefix': 'error',
} as const satisfies RulePreset;

const recommendedPreset = {
    ...corePreset,
} as const satisfies RulePreset;

const flatConfigPlugins = {
    '@demonicattack/typescript-plugin': eslintPluginTs,
} as const;

const createFlatConfig = <T extends RulePreset>(rules: T) =>
    ({
        plugins: flatConfigPlugins,

        rules: padKeysLeft(rules, '@demonicattack/typescript-plugin/'),
        settings: {},
    }) as const;

export default {
    meta: {
        name,
        version,
    },
    configs: {
        recommended: createFlatConfig(recommendedPreset),
    },
    rules: {
        ...eslintPluginTs.rules,
        // ...padKeysLeft(typescriptPlugin.rules, 'ts/'),
    },
} as const;
