import { isPackageExists } from 'local-pkg';
import type { Plugin } from 'prettier';
import type { MultilineArrayOptions as TMultilineArrayPluginConfigOptions } from 'prettier-plugin-multiline-arrays';
import type { PluginOptions as ITailwindcssPluginConfigOptions } from 'prettier-plugin-tailwindcss';

import { JAVASCRIPT_FILES, JSON_FILES, PRISMA_FILES, TYPESCRIPT_FILES } from './constants';
import type { TResolvedPrettierConfig, TUserPrettierOptions } from './types';
import { createOverride, interopDefault } from './utils';

const prettier = async (
    options: TUserPrettierOptions<ITailwindcssPluginConfigOptions & TMultilineArrayPluginConfigOptions> = {},
): Promise<TResolvedPrettierConfig<ITailwindcssPluginConfigOptions & TMultilineArrayPluginConfigOptions>> => {
    const { overrides = [], plugins = [], ...rest } = options;
    const multilineArraysPlugin = await interopDefault(import('prettier-plugin-multiline-arrays'));
    const jsonPlugins = await Promise.all([
        // @ts-expect-error prettier-plugin-packagejson is not typed
        interopDefault(import('prettier-plugin-packagejson')),
        interopDefault(import('prettier-plugin-sort-json')),
    ]);
    const tailwindcssPlugin = await interopDefault(import('prettier-plugin-tailwindcss'));
    // @ts-expect-error prettier-plugin-prisma is not typed
    const prismaPlugin = await interopDefault<unknown>(import('prettier-plugin-prisma'));
    return {
        arrowParens: 'avoid',
        bracketSameLine: false,
        bracketSpacing: true,
        endOfLine: 'lf',
        experimentalTernaries: true,
        jsxSingleQuote: true,
        overrides: [
            createOverride(JSON_FILES, {
                plugins: [
                    ...jsonPlugins,
                ],
                tabWidth: 2,
            }),
            createOverride(PRISMA_FILES, {
                plugins: [
                    prismaPlugin as Plugin<unknown>,
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
                        multilineArraysPlugin,
                    ],
                },
            ),
            ...overrides,
        ],
        plugins: [
            isPackageExists('tailwindcss') && [tailwindcssPlugin],
            ...plugins,
        ],
        printWidth: 120,
        proseWrap: 'always',
        quoteProps: 'as-needed',
        semi: true,
        singleQuote: true,
        tabWidth: 4,
        trailingComma: 'all',
        useTabs: false,
        ...rest,
    };
};

export { prettier };
