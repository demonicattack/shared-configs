import { config } from '@demonicattack/lint-staged';

export default {
    '*': allStagedFiles =>
        config({
            allStagedFiles,
            configuration: {
                onPrettier: true,
                onEslint: false,
                onTypescriptTypesCheck: false,
            },
        }),
};
