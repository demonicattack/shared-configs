import type { BuiltInParserName, Config as PrettierConfig, Options as PrettierOptions } from 'prettier';

type TPrettierOptions = PrettierOptions;
type TBuiltInParserName = BuiltInParserName;
type Awaitable<T> = Promise<T> | T;

interface IOverrideBase {
    excludeFiles?: string | string[];
    files: string | string[];
}

type TOverride<T> = {
    options?: Partial<T> & TPrettierOptions;
} & IOverrideBase;

type TResolvedPrettierConfig<T = Record<string, unknown>> = {
    overrides?: TOverride<T>[];
} & Omit<PrettierConfig, 'overrides'> &
    Partial<T> &
    TPrettierOptions;

type TUserPrettierOptions<T = Record<string, unknown>> = {
    overrides?: TOverride<T>[];
    plugins?: {
        multilinearrays: PrettierOptions['plugins'];
    };
} & Partial<T> &
    TPrettierOptions;

// 'slidev' | 'astro'
type TExternalParserName = '';

type TVendoredPrettierOptions = Partial<TPrettierOptions>;

interface TVendoredPrettierRuleOptions extends Omit<TPrettierOptions, 'parser'> {
    // eslint-disable-next-line @ts/no-redundant-type-constituents
    [k: string]: undefined | unknown;
    parser?: TBuiltInParserName | TExternalParserName;
}
// & Omit<TVendoredPrettierOptions, 'parser' | 'plugins'>;

export type {
    Awaitable,
    IOverrideBase,
    TBuiltInParserName,
    TExternalParserName,
    TOverride,
    TPrettierOptions,
    TResolvedPrettierConfig,
    TUserPrettierOptions,
    TVendoredPrettierOptions,
    TVendoredPrettierRuleOptions,
};
