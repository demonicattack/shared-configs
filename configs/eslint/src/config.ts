import type { Linter } from 'eslint';
import { FlatConfigComposer } from 'eslint-flat-config-utils';
import { isPackageExists } from 'local-pkg';

import type { RuleOptions } from '../typegen';

import {
    arca,
    comments,
    disables,
    eslint as esl,
    esx,
    ignores,
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
} from './configs';
import type { Awaitable, IOptionsConfig, TConfigNames, TFlatConfigItem } from './types';
import { interopDefault, isBoolean } from './utils';

const defaultPluginRenaming = {
    '@eslint-community/eslint-comments': '@comments',
    '@next/next': '@next',
    '@typescript-eslint': '@ts',
    arca: '@arca',
    'better-mutation': '@mutation',
    'es-x': '@es-x',
    eslint: '@eslint',
    import: '@import',
    'jsx-a11y': '@jsx-a11y',
    n: '@node',
    promise: '@promise',
    react: '@react',
    'react-dom': '@react-dom',
    'react-hooks': '@react-hooks',
    'react-hooks-extra': '@react-hooks-extra',
    'react-naming-convention': '@react-naming-convention',
    'react-refresh': '@react-refresh',
    'react-web-api': '@react-web-api',
    'react-x': '@react-x',
    regexp: '@regexp',
    'simple-import-sort': '@simple-import-sort',
    sonarjs: '@sonarjs',
    tailwindcss: '@tw',
    unicorn: '@unicorn',
};

const flatConfigProperties = [
    'name',
    'languageOptions',
    'linterOptions',
    'processor',
    'plugins',
    'rules',
    'settings',
] satisfies (keyof TFlatConfigItem)[];

type TResolvedOptions<T> = T extends boolean ? never : NonNullable<T>;
type TOptionConfigKey = keyof IOptionsConfig;
type TOverridesKey = keyof NonNullable<IOptionsConfig['overrides']>;
type TResolvedOptionsConfig<K extends TOptionConfigKey> = TResolvedOptions<IOptionsConfig[K]>;
type TOverridesType = Partial<Linter.RulesRecord & RuleOptions>;

const isSubOptions = <K extends TOptionConfigKey>(options: IOptionsConfig, key: K): TResolvedOptionsConfig<K> => {
    const option = options[key];

    return isBoolean(option) ? ({} as TResolvedOptionsConfig<K>) : ((option ?? {}) as TResolvedOptionsConfig<K>);
};
const getOverrides = (options: IOptionsConfig, key: TOverridesKey): TOverridesType => {
    const sub = isSubOptions(options, key);

    return {
        ...options.overrides?.[key],
        ...('overrides' in sub ? sub.overrides : {}),
    };
};

const eslint = (
    options: IOptionsConfig & Omit<TFlatConfigItem, 'files'> = {},
    ...userConfigs: Awaitable<FlatConfigComposer<any, any> | Linter.Config[] | TFlatConfigItem | TFlatConfigItem[]>[]
): FlatConfigComposer<TFlatConfigItem, TConfigNames> => {
    const {
        node: enableNode = true,
        arca: enableArca = true,
        autoRenamePlugins = true,
        comments: enableComments = true,
        componentExtensions = [],
        eslint: enableEslint = false,
        esx: enableEsx = true,
        gitignore: enableGitignore = true,
        import: enableImport = true,
        jsx: enableJsx = false,
        mutation: enableMutation = true,
        next: enableNext = isPackageExists('next'),
        perfectionist: enablePerfectionist = true,
        prettier: enablePrettier = isPackageExists('prettier'),
        promise: enablePromise = true,
        react: enableReact = isPackageExists('react'),
        regexp: enableRegexp = true,
        sonarjs: enableSonarjs = true,
        ts: enableTypeScript = isPackageExists('typescript'),
        tw: enableTailwindcss = isPackageExists('tailwindcss'),
        unicorn: enableUnicorn = true,
    } = options;

    const configs: Awaitable<TFlatConfigItem[]>[] = [];

    if (enableGitignore) {
        if (typeof enableGitignore === 'boolean') {
            configs.push(
                interopDefault(import('eslint-config-flat-gitignore')).then(r => [
                    r({
                        name: '@demonicattack/@git/gitignore',
                        strict: false,
                    }),
                ]),
            );
        } else {
            configs.push(
                interopDefault(import('eslint-config-flat-gitignore')).then(r => [
                    r({
                        name: '@demonicattack/@git/gitignore',
                        ...enableGitignore,
                    }),
                ]),
            );
        }
    }

    configs.push(
        ignores(options.ignores),
        javascript({
            ...isSubOptions(options, 'js'),
            overrides: getOverrides(options, 'js'),
        }),
    );

    if (enableNode) {
        configs.push(
            node({
                overrides: getOverrides(options, 'node'),
            }),
        );
    }

    if (enableArca) {
        configs.push(
            arca({
                overrides: getOverrides(options, 'arca'),
            }),
        );
    }

    if (enableComments) {
        configs.push(
            comments({
                overrides: getOverrides(options, 'comments'),
            }),
        );
    }

    if (enableEsx) {
        configs.push(
            esx({
                overrides: getOverrides(options, 'esx'),
            }),
        );
    }

    if (enableImport) {
        configs.push(
            imrt({
                ...isSubOptions(options, 'import'),
                overrides: getOverrides(options, 'import'),
                typescript: isPackageExists('typescript'),
            }),
        );
    }

    if (enableMutation) {
        configs.push(
            mutation({
                overrides: getOverrides(options, 'mutation'),
            }),
        );
    }

    if (enablePerfectionist) {
        configs.push(
            perfectionist({
                overrides: getOverrides(options, 'perfectionist'),
            }),
        );
    }

    if (enablePromise) {
        configs.push(
            promise({
                overrides: getOverrides(options, 'promise'),
            }),
        );
    }

    if (enableRegexp) configs.push(regexp(typeof enableRegexp === 'boolean' ? {} : enableRegexp));

    if (enableUnicorn) {
        configs.push(
            unicorn({
                ...isSubOptions(options, 'unicorn'),
                overrides: getOverrides(options, 'unicorn'),
            }),
        );
    }

    if (enableJsx) configs.push(jsx());

    if (enableEslint) configs.push(esl());

    if (enableSonarjs) {
        configs.push(
            sonarjs({
                overrides: getOverrides(options, 'sonarjs'),
            }),
        );
    }

    if (enableTailwindcss) {
        configs.push(
            tailwindcss({
                overrides: getOverrides(options, 'tw'),
            }),
        );
    }

    if (enableNext) {
        configs.push(
            // eslint-disable-next-line @node/callback-return
            next({
                overrides: getOverrides(options, 'next'),
            }),
        );
    }

    const typescriptOptions = isSubOptions(options, 'ts');
    const tsconfigPath = 'tsconfigPath' in typescriptOptions ? typescriptOptions.tsconfigPath : undefined;

    if (enableTypeScript) {
        configs.push(
            typescript({
                ...typescriptOptions,
                type: options.type,
                componentExtensions,
                overrides: getOverrides(options, 'ts'),
            }),
        );
    }

    if (enableReact) {
        configs.push(
            react({
                ...isSubOptions(options, 'react'),
                overrides: getOverrides(options, 'react'),
                tsconfigPath,
            }),
        );
    }

    if (enablePrettier) {
        configs.push(
            prettier({
                ...isSubOptions(options, 'prettier'),
            }),
        );
    }

    configs.push(disables());

    const fusedConfig: TFlatConfigItem = {};

    for (const key of flatConfigProperties) {
        if (key in options) {
            fusedConfig[key] = options[key] as never;
        }
    }

    if (Object.keys(fusedConfig).length !== 0) configs.push([fusedConfig]);

    let composer = new FlatConfigComposer<TFlatConfigItem, TConfigNames>();

    const configArray = userConfigs.map(item => {
        if (Array.isArray(item)) return item;
        return [item];
    });

    composer = composer.append(...configs, ...(configArray as any));

    if (autoRenamePlugins) composer = composer.renamePlugins(defaultPluginRenaming);

    return composer;
};

export { eslint };
