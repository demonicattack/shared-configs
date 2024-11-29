import { isPackageExists } from 'local-pkg';
import type { MultilineArrayOptions as TMultilineArrayPluginConfigOptions } from 'prettier-plugin-multiline-arrays';
import type { PluginOptions as ITailwindcssPluginConfigOptions } from 'prettier-plugin-tailwindcss';

import { JAVASCRIPT_FILES, JSON_FILES, PRISMA_FILES, TYPESCRIPT_FILES } from './constants';
import type { TResolvedPrettierConfig, TUserPrettierOptions } from './types';
import { createOverride, requirePrettierTool, resolvePlugins } from './utils';

const config = (
    options: TUserPrettierOptions<ITailwindcssPluginConfigOptions & TMultilineArrayPluginConfigOptions> = {},
): TResolvedPrettierConfig<ITailwindcssPluginConfigOptions & TMultilineArrayPluginConfigOptions> => {
    const { overrides = [], plugins = [], ...rest } = options;

    return {
        overrides: [
            createOverride(JSON_FILES, {
                tabWidth: 2,
                plugins: [
                    resolvePlugins([
                        'prettier-plugin-sort-json',
                        'prettier-plugin-packagejson',
                    ]),
                ],
            }),
            createOverride(PRISMA_FILES, {
                plugins: [
                    'prettier-plugin-prisma',
                ],
            }),
            createOverride(
                [
                    ...JAVASCRIPT_FILES,
                    ...TYPESCRIPT_FILES,
                ],
                {
                    multilineArraysWrapThreshold: 1,
                    plugins: [
                        requirePrettierTool('prettier-plugin-multiline-arrays'),
                    ],
                },
            ),
            ...overrides,
        ],
        printWidth: 120,
        tabWidth: 4,
        arrowParens: 'avoid',
        bracketSameLine: false,
        bracketSpacing: true,
        endOfLine: 'lf',
        experimentalTernaries: true,
        jsxSingleQuote: true,
        plugins: [
            isPackageExists('tailwindcss') && resolvePlugins('prettier-plugin-tailwindcss'),
            ...plugins,
        ],
        proseWrap: 'always',
        quoteProps: 'as-needed',
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        useTabs: false,
        ...rest,
    };
};

export { config };
