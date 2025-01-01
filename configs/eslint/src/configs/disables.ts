import { JAVASCRIPT_FILES } from '../constants';
import type { TFlatConfigItem } from '../types';

const disables = async (): Promise<TFlatConfigItem[]> => [
    {
        name: '@demonicattack/@disables/allow-default-export',
        files: [
            '**/*config*.?([cm])[jt]s?(x)',
            '**/{views,pages,routes,middleware,plugins,api,modules}/**/*.?([cm])[jt]s?(x)',
            '**/{index,vite,esbuild,rollup,rolldown,webpack,rspack}.?([cm])[jt]s?(x)',
            '**/*.d.ts',
            '**/*.md/**',
            '**/.prettierrc*',
        ],
        rules: {
            '@arca/no-default-export': 'off',
            '@import/no-default-export': 'off',
        },
    },
    {
        name: '@demonicattack/@disables/js',
        files: [...JAVASCRIPT_FILES],
        rules: {
            '@ts/explicit-function-return-type': 'off',
        },
    },
    {
        name: '@demonicattack/@disables/config-files',
        files: ['**/*.config.?([cm])js?(x)', '**/*.config.?([m])ts?(x)'],
        rules: {
            '@arca/no-default-export': 'off',
            '@import/no-default-export': 'off',
            '@import/no-extraneous-dependencies': 'off',
            '@ts/explicit-function-return-type': 'off',
            'no-console': 'off',
        },
    },
    {
        name: '@demonicattack/@disables/nextjs',
        files: [
            'src/app/**/{page,layout,not-found,error,loading}.tsx',
            'src/app/{sitemap,robots}.ts',
            'app/**/{page,layout,not-found,error,loading}.tsx',
            'app/{sitemap,robots}.ts',
            'middleware.ts',
        ],
        rules: {
            '@arca/jsx-import-react': 'off',
            '@arca/no-default-export': 'off',
            '@react/react-in-jsx-scope': 'off',
        },
    },
    {
        name: '@demonicattack/@disables/unicorn',
        files: ['vite-env.d.ts'],
        rules: {
            '@unicorn/prevent-abbreviations': 'off',
        },
    },
];

export { disables };
