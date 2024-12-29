import { lintStaged } from '@demonicattack/lint-staged';
export default {
    '*': allStagedFiles => [
        ...lintStaged({
            allStagedFiles,
            configuration: {
                eslint: false,
                prettier: false,
            },
        }),
        'yarn run lint:ws',
    ],
};
