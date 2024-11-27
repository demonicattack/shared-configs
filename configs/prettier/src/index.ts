// import { isPackageExists } from 'local-pkg';
// import type { Config as IPrettierConfig, Options as IPrettierSettings } from 'prettier';
// import type { MultilineArrayOptions as TMultilineArrayPluginConfigOptions } from 'prettier-plugin-multiline-arrays';
// import { defaultMultilineArrayOptions } from 'prettier-plugin-multiline-arrays';
// import type { PluginOptions as ITailwindcssPluginConfigOptions } from 'prettier-plugin-tailwindcss';

// import { r } from './utils';

// import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from './constants';

// type TPartialTailwindcssPluginConfigOptions = {
//     tailwindPreserveDuplicates?: boolean;
// } & Partial<ITailwindcssPluginConfigOptions>;
// type TPartialMultilineArrayPluginConfigOptions = Partial<TMultilineArrayPluginConfigOptions>;

// type PluginSpecificOptions<T> =
//     T extends TPartialTailwindcssPluginConfigOptions ? TPartialTailwindcssPluginConfigOptions
//     : T extends TPartialMultilineArrayPluginConfigOptions ? TPartialMultilineArrayPluginConfigOptions
//     : never;

// interface IOverridesOptionsForPlugins<
//     T extends
//         | IPrettierSettings
//         | TPartialMultilineArrayPluginConfigOptions
//         | TPartialTailwindcssPluginConfigOptions = IPrettierSettings,
// > extends Omit<IPrettierConfig['overrides'], 'options'> {
//     excludeFiles?: string | string[] | undefined;
//     files?: string | string[];
//     options?: T | undefined;
// }

// interface IPrettierOptions extends Omit<IPrettierConfig, 'plugins'> {
//     overrides?: IOverridesOptionsForPlugins<IPrettierSettings>[];
//     plugins?: {
//         multilineArrays?: IOverridesOptionsForPlugins<TPartialMultilineArrayPluginConfigOptions> | boolean;
//         tailwindcss?: IOverridesOptionsForPlugins<TPartialTailwindcssPluginConfigOptions> | boolean;
//     }[];
//     settings?: IPrettierSettings & PluginSpecificOptions<TPartialMultilineArrayPluginConfigOptions | TPartialTailwindcssPluginConfigOptions>;
// }
// interface IPrettierOptions extends Omit<IPrettierConfig, 'plugins'> {
//   overrides?: IOverridesOptionsForPlugins<IPrettierSettings>[];
//   plugins?: Array<IOverridesOptionsForPlugins<any> | boolean>;
//   settings?: IPrettierSettings & PluginSpecificOptions<TPartialMultilineArrayPluginConfigOptions | TPartialTailwindcssPluginConfigOptions>;
// }

// type IPrettierResolvedOptions = Partial<IPrettierOptions>;

// const tailwindOptionsDefault: IOverridesOptionsForPlugins<TPartialTailwindcssPluginConfigOptions> = {
//     options: {
//         tailwindFunctions: ['classNames', 'clsx', 'cva', 'cn'],
//         tailwindPreserveDuplicates: true,
//     },
// };

// const multilineOptionsDefault: IOverridesOptionsForPlugins<TPartialMultilineArrayPluginConfigOptions> = {
//     files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
//     options: {
//         ...defaultMultilineArrayOptions,
//         multilineArraysWrapThreshold: 1,
//     },
// };

// const sharedSettingsOptionsDefault =
//     //  Partial<IPrettierOptions['settings']> =
//     {
//         arrowParens: 'avoid',
//         bracketSameLine: false,
//         bracketSpacing: true,
//         endOfLine: 'lf',
//         experimentalTernaries: true,
//         jsxSingleQuote: true,
//         printWidth: 120,
//         proseWrap: 'always',
//         quoteProps: 'as-needed',
//         semi: true,
//         singleQuote: true,
//         tabWidth: 4,
//         trailingComma: 'all',
//         useTabs: false,
//     };

// const getMultilineArrayOverrides = (
//     plugin: IOverridesOptionsForPlugins<TPartialMultilineArrayPluginConfigOptions>
// ): IOverridesOptionsForPlugins<any>[] =>
//     typeof plugin === 'object' ?
//         ? [
//               {
//                   excludeFiles: plugin.excludeFiles,
//                   files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES, ...(plugin.files || [])],
//                   options: {
//                       plugins: ['prettier-plugin-multiline-arrays'],
//                       ...multilineOptionsDefault.options,
//                       ...plugin.options,
//                   },
//               },
//           ]
//         : []

// function getTailwindOverrides(
//     tailwindConfig: IOverridesOptionsForPlugins<TPartialTailwindcssPluginConfigOptions>
// ): IOverridesOptionsForPlugins<any>[] {
//     return typeof tailwindConfig === 'object'
//         ? [
//               {
//                   excludeFiles: tailwindConfig.excludeFiles,
//                     files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],
//                   options: {
//                       plugins: ['prettier-plugin-tailwindcss'],
//                       ...tailwindOptionsDefault.options,
//                       ...tailwindConfig.options,
//                   },
//               },
//           ]
//         : [];
// }

const config = {
    printWidth: 120,
    tabWidth: 4,
    arrowParens: 'avoid',
    bracketSameLine: false,
    bracketSpacing: true,
    endOfLine: 'lf',
    experimentalTernaries: true,
    jsxSingleQuote: true,
    multilineArraysWrapThreshold: 1,
    plugins: ['prettier-plugin-multiline-arrays'],
    proseWrap: 'always',
    quoteProps: 'as-needed',
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    useTabs: false,
};

// eslint-disable-next-line import/prefer-default-export
export { config };
// const { overrides = [], plugins = [], settings = {} } = options;

// const defaultPlugins = {
//     multilineArrays: multilineOptionsDefault,
//     ...(isPackageExists('tailwindcss') && { tailwindcss: tailwindOptionsDefault }),
// };

// const { multilineArrays, tailwindcss } = { ...defaultPlugins, ...plugins };

// if (typeof multilineArrays === 'object') overrides.push(...getMultilineArrayOverrides(multilineArrays));
// if (typeof tailwindcss === 'object') overrides.push(...getTailwindOverrides(tailwindcss));
