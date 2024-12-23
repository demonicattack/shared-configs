// eslint-disable-next-line @sonarjs/deprecation
import { builtinRules } from 'eslint/use-at-your-own-risk';
import { flatConfigsToRulesDTS } from 'eslint-typegen/core';
import { writeFile } from 'node:fs/promises';

import {
    arca,
    comments,
    eslint,
    esx,
    imrt,
    javascript,
    jsx,
    mutation,
    next,
    node,
    perfectionist,
    prettier,
    promise,
    react,
    regexp,
    sonarjs,
    tailwindcss,
    typescript,
    unicorn,
} from '../configs';
import { combine } from '../utils';

const configs = await combine(
    {
        plugins: {
            '': {
                // eslint-disable-next-line @sonarjs/deprecation
                rules: Object.fromEntries(builtinRules.entries()),
            },
        },
    },
    javascript(),
    tailwindcss(),
    node(),
    jsx(),
    perfectionist(),
    unicorn(),
    react(),
    next(),
    esx(),
    eslint(),
    imrt(),
    typescript(),
    prettier(),
    arca(),
    comments(),
    mutation(),
    promise(),
    regexp(),
    sonarjs(),
);

const configNames = configs.map(index => index.name).filter(Boolean) as string[];

const dts = await flatConfigsToRulesDTS(configs, {
    includeAugmentation: false,
});

const configType = `
// Names of all the configs
export type ConfigNames = ${configNames.map(index => `'${index}'`).join(' | ')}
`;

await writeFile('typegen.d.ts', dts + configType);
