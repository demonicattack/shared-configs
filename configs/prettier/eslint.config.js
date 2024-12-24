import { eslint } from '@demonicattack/eslint';
import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '@demonicattack/prettier';

// export const parserPlain = {
//     meta: {
//         name: 'parser-plain',
//     },
//     parseForESLint: code => ({
//         ast: {
//             body: [],
//             comments: [],
//             loc: { end: code.length, start: 0 },
//             range: [
//                 0,
//                 code.length,
//             ],
//             tokens: [],
//             type: 'Program',
//         },
//         scopeManager: null,
//         services: { isPlain: true },
//         visitorKeys: {
//             Program: [],
//         },
//     }),
// };

export default eslint({
    type: 'lib',
    js: {
        configurations: {
            airbnb: true,
        },
    },
    import: {
        typescript: true,
        airbnb: true,
    },
    ts: {
        tsconfigPath: 'tsconfig.json',
        overridesTypeAware: {
            '@ts/no-unsafe-return': 'off',
            '@ts/strict-boolean-expressions': 'off',
            '@ts/no-unsafe-member-access': 'off',
            '@ts/no-explicit-any': 'off',
        },
    },
    /**
     * @detect "prettier-plugin-tailwindcss"
     */
    sonarjs: {
        overrides: {
            '@sonarjs/fixme-tag': 'off',
        },
    },
    prettier: true,
    tw: false,
    perfectionist: true,
})
    .override('@demonicattack/@prettier/rules', {
        files: [
            ...JAVASCRIPT_FILES,
            ...TYPESCRIPT_FILES,
        ],
        rules: {
            '@prettier/prettier': [
                'error',
                {
                    plugins: [
                        'prettier-plugin-multiline-arrays',
                        'prettier-plugin-packagejson',
                        'prettier-plugin-sort-json',
                        'prettier-plugin-prisma',
                        'prettier-plugin-tailwindcss',
                    ],
                    arrowParens: 'avoid',
                    bracketSameLine: false,
                    bracketSpacing: true,
                    endOfLine: 'lf',
                    experimentalTernaries: true,
                    jsxSingleQuote: true,
                    multilineArraysWrapThreshold: 1,
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
    })
    .onResolved(config => {
        config.forEach(({ name, rules, files }) => {
            if (name === '@demonicattack/@prettier/rules') {
                console.log('@demonicattack/@prettier/files', files);
                if (rules['@prettier/prettier']) {
                    rules['@prettier/prettier'].map(r => {
                        if (typeof r === 'object') {
                            console.log('@prettier/prettier', r);
                            if (r.overrides) {
                                r.overrides.map(objs => console.log('@prettier/prettier/overrides', objs));
                            }
                        }
                    });
                }
            }
        });
    });
