import { lintStaged } from '@demonicattack/lint-staged';
export default {
    '*': allStagedFiles => [
        ...lintStaged({
            allStagedFiles,
        }),
        'yarn run lint:ws',
        'yarn run build',
    ],
};
