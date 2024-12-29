// @ts-check
import { eslint } from '@demonicattack/eslint';

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
    eslint: {
        overrides: {
            /**
             *  @eslint @overrides {...}
             * '@eslint/fixer-return': 'off',
             */
        },
    },
    /** Overrides for ignored files */
    ignores: ['typegen.d.ts', '.eslint-config-inspector'],
    /** @default true @imrt plugin enabled */
    import: {
        /** @default false airbnb rules overrides and settings */
        airbnb: true,
        overrides: {
            /**
             * [@]import @overrides {...}
             * @simple-import-sort @overrides {...}
             * ================================================
             * '@import/no-extraneous-dependencies': 'off',
             * '@simple-import-sort/imports': ['error', {...}],
             */
        },
        /** @default false recommended import rules */
        recommended: true,
        /** @default auto add typescript settings */
        typescript: true,
    },
    /** @default true @js plugin enabled */
    js: {
        configurations: {
            /** @default false airbnb rules overrides */
            airbnb: true,
            /** @default false rules for stylistic code if use prettier or formatter plugin disabled */
            formatter: true,
            /** @default true recommended js rules */
            recommended: true,
        },
        overrides: {
            /**
             *  @js @overrides not-prefix {...}
             * 'no-implicit-coercion': 'off',
             */
        },
    },
    /** @default false enable if you use JSX */
    jsx: true,
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
    next: {
        overrides: {
            /**
             *  @next @overrides {...}
             * '@next/no-html-link-for-pages': 'off',
             */
        },
    },
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
    react: {
        /** @default false @jsx-a11y plugin enabled */
        a11y: true,
        /** @default false airbnb [@react, @jsx-a11y, @react-hooks] rules overrides */
        airbnb: true,
        overrides: {
            /**
             *  @react @overrides {...}
             *  @jsx-a11y @overrides {...}
             *  @react-dom @overrides {...}
             *  @react-hooks @overrides {...}
             *  @eslint-react @overrides {...}
             *  @react-hooks-extra @overrides {...}
             *  @react-naming-convention @overrides {...}
             *  @react-refresh @overrides {...}
             *  @react-web-api @overrides {...}
             *  @react-x @overrides {...}
             * ================================================
             * '@react/boolean-prop-naming': ['error', { ... } ],
             * '@react-dom/no-dangerously-set-innerhtml': 'error',
             * '@jsx-a11y/no-noninteractive-element-interactions': ['error', { ... } ],
             * '@react-hooks/rules-of-hooks': 'error',
             * '@eslint-react/no-useless-fragment': 'error',
             * '@react-hooks-extra/no-redundant-custom-hook': 'error',
             * '@react-naming-convention/use-state': 'error'
             * '@react-refresh/only-export-components': ['error', { ... } ],
             * '@react-web-api/no-leaked-event-listener': 'error',
             * '@react-x/no-array-index-key': 'error',
             */
        },
    },
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
        },
        tsconfigPath: 'tsconfig.json',
    },
    /** @default auto @tw plugin enabled */
    tw: {
        overrides: {
            /**
             *  @tw @overrides {...}
             * '@tw/classnames-order': 'off',
             */
        },
    },
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
