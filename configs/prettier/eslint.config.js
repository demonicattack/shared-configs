import { eslint } from '@demonicattack/eslint';
import { prettier, JAVASCRIPT_FILES, JSON_FILES, PRISMA_FILES, TYPESCRIPT_FILES } from '@demonicattack/prettier';

export const parserPlain = {
    meta: {
        name: 'parser-plain',
    },
    parseForESLint: code => ({
        ast: {
            body: [],
            comments: [],
            loc: { end: code.length, start: 0 },
            range: [
                0,
                code.length,
            ],
            tokens: [],
            type: 'Program',
        },
        scopeManager: null,
        services: { isPlain: true },
        visitorKeys: {
            Program: [],
        },
    }),
};

const mergePrettierOptions = (options, overrides = {}) => {
    return {
        ...options,
        ...overrides,
        plugins: [
            ...(overrides.plugins || []),
            ...(options.plugins || []),
        ],
    };
};

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
    prettier: true,
    tw: false,
    perfectionist: false,
})
    .override('@demonicattack/@prettier/rules', {
        files: [
            // ...JAVASCRIPT_FILES,
            // ...TYPESCRIPT_FILES,
            ...JSON_FILES,
            // ...PRISMA_FILES,
        ],
        languageOptions: {
            parser: parserPlain,
        },
        rules: {
            '@prettier/prettier': [
                'error',
                mergePrettierOptions(prettier, {
                    parser: 'json-stringify',
                    plugins: [
                        'prettier-plugin-packagejson',
                    ],
                }),
                {
                    usePrettierrc: false,
                },
            ],
        },
    })
    .override('@demonicattack/@prettier/rules', {
        files: [
            ...JSON_FILES,
        ],
        languageOptions: {
            parser: parserPlain,
        },
        rules: {
            '@prettier/prettier': [
                'error',
                mergePrettierOptions(prettier, {
                    parser: 'json',
                    plugins: [
                        'prettier-plugin-sort-json',
                    ],
                }),
                {
                    usePrettierrc: false,
                },
            ],
        },
    })
    .onResolved(config => {
        config.forEach(({ name, rules, files, languageOptions }) => {
            if (name === '@demonicattack/@prettier/rules') {
                console.log('@demonicattack/@prettier/files', files);
                console.log('@demonicattack/@prettier/languageOptions', languageOptions);
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
