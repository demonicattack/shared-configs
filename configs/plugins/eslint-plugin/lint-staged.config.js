import { lintStaged } from '@demonicattack/lint-staged';
export default {
    '*': allStagedFiles => lintStaged({ allStagedFiles }),
};
