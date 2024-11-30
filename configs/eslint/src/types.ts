import type { Linter } from 'eslint';
import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore';

import type { RuleOptions } from '../typegen';

import type { ParserOptions } from '@typescript-eslint/parser';

type TRules = RuleOptions;
type Awaitable<T> = Promise<T> | T;
type TConfig = Linter.Config;

interface IOptionsFiles {
    files?: string[];
}

interface IOptionsIsInEditor {
    isInEditor?: boolean;
}

type TFlatConfigItem = {
    plugins?: Record<string, any>;
} & Omit<Linter.Config<Linter.RulesRecord & TRules>, 'plugins'>;

interface IOptionsProjectType {
    type?: 'app' | 'lib';
}

interface IOptionsComponentExtensions {
    componentExtensions?: string[];
}

interface IOptionsOverrides {
    overrides?: TFlatConfigItem['rules'];
}

interface IOptionsTypeScriptParserOptions {
    parserOptions?: Partial<ParserOptions>;

    /**
     * Glob patterns for files that should be type aware.
     * @default ['**\/*.{ts,tsx}']
     */
    filesTypeAware?: string[];

    /**
     * Glob patterns for files that should not be type aware.
     * @default ['**\/*.md\/**', '**\/*.astro/*.ts']
     */
    ignoresTypeAware?: string[];
}

interface IOptionsTypeScriptWithTypes {
    /**
     * When this options is provided, type aware rules will be enabled.
     * @see https://typescript-eslint.io/linting/typed-linting/
     */
    tsconfigPath?: string;

    /**
     * Override type aware rules.
     */
    overridesTypeAware?: TFlatConfigItem['rules'];
}

interface IOptionsPrettier {
    recommended?: boolean;
}

interface IOptionsImport {
    react?: boolean;
    typescript?: boolean;
}

interface IOptionsRegExp {
    level?: 'error' | 'warn';
}

export interface IOptionsDemonicAttack {
    r: boolean;
}

interface IOptionsUnicorn {
    base?: boolean | TFlatConfigItem['rules'];
    recommended?: boolean | TFlatConfigItem['rules'];
}

interface IOptionsJs {
    configurations?: Partial<{
        airbnb?: boolean | TFlatConfigItem['rules'];
        all?: boolean | TFlatConfigItem['rules'];
        base?: boolean | TFlatConfigItem['rules'];
        formatter?: boolean | TFlatConfigItem['rules'];
        recommended?: boolean | TFlatConfigItem['rules'];
    }>;
}

type TOptionsTypescript =
    | (IOptionsOverrides & IOptionsTypeScriptParserOptions)
    | (IOptionsOverrides & IOptionsTypeScriptWithTypes);

interface IOptionsConfig extends IOptionsComponentExtensions, IOptionsProjectType {
    demonicattack?: IOptionsOverrides;
    gitignore?: boolean | FlatGitignoreOptions;
    js?: IOptionsJs | IOptionsOverrides;
    /**
     * By default, the plugins is enabled
     */
    node?: boolean | IOptionsOverrides;
    comments?: boolean | IOptionsOverrides;
    esx?: boolean | IOptionsOverrides;
    import?: boolean | (IOptionsImport & IOptionsOverrides);
    mutation?: boolean | IOptionsOverrides;
    perfectionist?: boolean | IOptionsOverrides;
    promise?: boolean | IOptionsOverrides;
    regexp?: boolean | (IOptionsOverrides & IOptionsRegExp);
    unicorn?: boolean | (IOptionsOverrides & IOptionsUnicorn);

    /**
     * By default, the plugins is enabled if the current package is in your project
     * @example typescript, react, tailwindcss, etc
     */
    next?: boolean | IOptionsOverrides;
    prettier?: boolean | IOptionsPrettier;
    react?: boolean | IOptionsOverrides;
    ts?: boolean | TOptionsTypescript;
    tw?: boolean | IOptionsOverrides;

    /**
     * By default, the plugins is disabled
     */
    arca?: boolean | IOptionsOverrides;
    eslint?: boolean | IOptionsOverrides;
    // json?: IOptionsOverrides | boolean;
    jsx?: boolean;
    sonarjs?: boolean | IOptionsOverrides;

    /**
     * Rename plugins
     */
    autoRenamePlugins?: boolean;

    /**
     * Override rules
     */
    overrides?: {
        node?: TFlatConfigItem['rules'];
        arca?: TFlatConfigItem['rules'];
        comments?: TFlatConfigItem['rules'];
        demonicattack?: TFlatConfigItem['rules'];
        esx?: TFlatConfigItem['rules'];
        import?: TFlatConfigItem['rules'];
        js?: TFlatConfigItem['rules'];
        // json?: TFlatConfigItem['rules'];
        mutation?: TFlatConfigItem['rules'];
        next?: TFlatConfigItem['rules'];
        perfectionist?: TFlatConfigItem['rules'];
        promise?: TFlatConfigItem['rules'];
        react?: TFlatConfigItem['rules'];
        sonarjs?: TFlatConfigItem['rules'];
        ts?: TFlatConfigItem['rules'];
        tw?: TFlatConfigItem['rules'];
        unicorn?: TFlatConfigItem['rules'];
    };
}

export type {
    Awaitable,
    IOptionsComponentExtensions,
    IOptionsConfig,
    IOptionsFiles,
    IOptionsImport,
    IOptionsIsInEditor,
    IOptionsJs,
    IOptionsOverrides,
    IOptionsPrettier,
    IOptionsProjectType,
    IOptionsRegExp,
    IOptionsTypeScriptParserOptions,
    IOptionsTypeScriptWithTypes,
    IOptionsUnicorn,
    TConfig,
    TFlatConfigItem,
    TOptionsTypescript,
    TRules,
};

export { type ConfigNames as TConfigNames } from '../typegen';
