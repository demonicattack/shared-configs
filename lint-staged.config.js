import { lintStaged } from '@demonicattack/lint-staged';
export default {
    '*': allStagedFiles => [
        ...lintStaged({
            allStagedFiles,
            configuration: {
                eslint: false,
            },
        }),
        'yarn run lint:ws',
    ],
};
