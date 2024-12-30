// @ts-check
import { eslint } from './dist/index.js';

export default eslint({
    /** @default true @node plugin enabled */
    node: {
        overrides: {
            /**
             *  @node @overrides {...}
             * '@node/callback-return': 'off',
             */
        },
    },
    /** @default true @arca plugin enabled */
    arca: {
        overrides: {
            /**
             *  @arca @overrides {...}
             * '@arca/curly': 'error',
             */
        },
    },
    /** @default true @comments plugin enabled */
    comments: {
        overrides: {
            /**
             *  @comments @overrides {...}
             * '@comments/disable-enable-pair': 'off',
             */
        },
    },
    /** @default false @eslint plugin enabled */
    eslint: false,
    /** Overrides for ignored files */
    ignores: [
        'typegen.d.ts',
        '.eslint-config-inspector',
    ],
    /** @default true [@]import plugin enabled */
    import: {
        /** @default false airbnb rules overrides and settings */
        airbnb: true,
        /** @default false recommended import rules */
        recommended: true,
        /** @default auto add typescript settings */
        typescript: true,
        overrides: {
            /**
             * [@]import @overrides {...}
             * @simple-import-sort @overrides {...}
             * ================================================
             * '@import/no-extraneous-dependencies': 'off',
             * '@simple-import-sort/imports': ['error', {...}],
             */
            '@import/no-extraneous-dependencies': 'off',
        },
    },
    /** @default true @js plugin enabled */
    js: {
        configurations: {
            /** @default false airbnb rules overrides */
            airbnb: true,
            /** @default false rules for stylistic code if use prettier or formatter plugin disabled */
            formatter: false,
            /** @default true recommended js rules */
            recommended: true,
        },
        overrides: {
            /**
             *  @js @overrides not-prefix {...}
             * 'no-implicit-coercion': 'off',
             */
            'no-useless-computed-key': 'off',
        },
    },
    /** @default false enable if you use JSX */
    jsx: false,
    /** @default true @mutation plugin enabled */
    mutation: {
        overrides: {
            /**
             *  @mutation @overrides {...}
             * '@mutation/no-mutation': 'off',
             */
        },
    },
    /** @default auto @next plugin enabled */
    next: false,
    /** @default true @perfectionist plugin enabled */
    perfectionist: {
        overrides: {
            /**
             *  @perfectionist @overrides {...}
             * '@perfectionist/sort-maps': 'off',
             */
        },
    },
    /** @default auto @prettier plugin enabled */
    prettier: {
        /** @default true recommended overrides rules for work prettier */
        recommended: true,
    },
    /** @default true @promise plugin enabled */
    promise: {
        overrides: {
            /**
             *  @promise @overrides {...}
             *  @eslint-promise @overrides {...}
             * '@promise/no-native': 'off',
             */
        },
    },
    /** @default false @react plugin enabled */
    react: false,
    /** @default true @regexp plugin enabled */
    regexp: {
        overrides: {
            /**
             *  @regexp @overrides {...}
             * '@regexp/strict': 'off',
             */
        },
    },
    /** @default true @sonarjs plugin enabled */
    sonarjs: {
        overrides: {
            /**
             *  @sonarjs @overrides {...}
             * '@sonarjs/cognitive-complexity': 'error',
             */
        },
    },
    /** @default auto @ts plugin enabled */
    ts: {
        /** Expected value to be a non-empty array. */
        // filesTypeAware: [],
        // ignoresTypeAware: [],
        overrides: {
            /**
             *  @ts @overrides {...}
             * '@ts/no-array-constructor': 'off',
             */
        },
        overridesTypeAware: {
            /**
             *  @tsTypeAware @overrides {...}
             * '@ts/await-thenable': 'off',
             */
            '@ts/no-deprecated': 'off',
            '@ts/require-await': 'off',
            '@ts/no-explicit-any': 'off',
            '@ts/no-unsafe-return': 'off',
            '@ts/no-unsafe-argument': 'off',
            '@ts/no-unsafe-assignment': 'off',
            '@ts/promise-function-async': 'off',
            '@ts/no-unsafe-member-access': 'off',
            '@ts/strict-boolean-expressions': 'off',
        },
        tsconfigPath: 'tsconfig.json',
    },
    /** @default auto @tw plugin enabled */
    tw: false,
    /** @default true @unicorn plugin enabled */
    unicorn: {
        overrides: {
            /**
             *  @unicorn @overrides {...}
             * '@unicorn/consistent-empty-array-spread': 'off',
             */
        },
        /** @default true add default rules */
        recommended: true,
    },
}).override('@demonicattack/@prettier/rules', {
    rules: {
        '@prettier/prettier': [
            'error',
            {
                arrowParens: 'avoid',
                bracketSameLine: false,
                bracketSpacing: true,
                endOfLine: 'lf',
                experimentalTernaries: true,
                jsxSingleQuote: true,
                printWidth: 120,
                proseWrap: 'always',
                quoteProps: 'as-needed',
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                useTabs: false,
            },
            {
                usePrettierrc: false,
            },
        ],
    },
});
