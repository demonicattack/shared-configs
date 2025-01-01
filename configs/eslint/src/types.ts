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
    parserOptions?: Partial<ParserOptions>;
}

interface IOptionsTypeScriptWithTypes {
    overridesTypeAware?: TFlatConfigItem['rules'];
    tsconfigPath?: string;
}

interface IOptionsPrettier {
    recommended?: boolean;
}

interface IOptionsImport {
    airbnb?: boolean;
    recommended?: boolean;
    typescript?: boolean;
}

interface IArca {
    react?: boolean;
}

interface IOptionsReact {
    a11y?: boolean | TFlatConfigItem['rules'];
    airbnb?: boolean | TFlatConfigItem['rules'];
}

interface IOptionsUnicorn {
    recommended?: boolean | TFlatConfigItem['rules'];
}

interface IOptionsJs {
    configurations?: Partial<{
        airbnb?: boolean | TFlatConfigItem['rules'];
        formatter?: boolean | TFlatConfigItem['rules'];
        recommended?: boolean | TFlatConfigItem['rules'];
    }>;
}

type TOptionsTypescript =
    | (IOptionsOverrides & IOptionsTypeScriptParserOptions)
    | (IOptionsOverrides & IOptionsTypeScriptWithTypes);

interface IOptionsConfig extends IOptionsComponentExtensions, IOptionsProjectType {
    /**
     * By default, the plugins is enabled
     */
    node?: boolean | IOptionsOverrides;
    /**
     * By default, the plugins is disabled
     */
    arca?: boolean | (IArca & IOptionsOverrides);
    /**
     * Rename plugins
     */
    autoRenamePlugins?: boolean;
    comments?: boolean | IOptionsOverrides;
    eslint?: boolean | IOptionsOverrides;
    esx?: boolean | IOptionsOverrides;
    gitignore?: boolean | FlatGitignoreOptions;
    import?: boolean | (IOptionsImport & IOptionsOverrides);
    js?: IOptionsJs | IOptionsOverrides;
    jsx?: boolean;
    mutation?: boolean | IOptionsOverrides;
    /**
     * By default, the plugins is enabled if the current package is in your project
     * @example typescript, react, tailwindcss, etc
     */
    next?: boolean | IOptionsOverrides;
    /**
     * Override rules
     */
    overrides?: {
        node?: TFlatConfigItem['rules'];
        arca?: TFlatConfigItem['rules'];
        comments?: TFlatConfigItem['rules'];
        esx?: TFlatConfigItem['rules'];
        import?: TFlatConfigItem['rules'];
        js?: TFlatConfigItem['rules'];
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
    perfectionist?: boolean | IOptionsOverrides;
    prettier?: boolean | IOptionsPrettier;
    promise?: boolean | IOptionsOverrides;
    react?: boolean | (IOptionsOverrides & IOptionsReact);
    regexp?: boolean | IOptionsOverrides;
    sonarjs?: boolean | IOptionsOverrides;
    ts?: boolean | TOptionsTypescript;
    tw?: boolean | IOptionsOverrides;
    unicorn?: boolean | (IOptionsOverrides & IOptionsUnicorn);
}

export type {
    Awaitable,
    IArca,
    IOptionsComponentExtensions,
    IOptionsConfig,
    IOptionsFiles,
    IOptionsImport,
    IOptionsIsInEditor,
    IOptionsJs,
    IOptionsOverrides,
    IOptionsPrettier,
    IOptionsProjectType,
    IOptionsReact,
    IOptionsTypeScriptParserOptions,
    IOptionsTypeScriptWithTypes,
    IOptionsUnicorn,
    TConfig,
    TFlatConfigItem,
    TOptionsTypescript,
    TRules,
};

export { type ConfigNames as TConfigNames } from '../typegen';
