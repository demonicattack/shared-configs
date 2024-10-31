import { config } from '@demonicattack/lint-staged';

export default {
    '*': allStagedFiles =>
        config({
            allStagedFiles,
            configuration: {
                onPrettier: false,
                onEslint: false,
                onTypescriptTypesCheck: false,
            },
        }),
};
