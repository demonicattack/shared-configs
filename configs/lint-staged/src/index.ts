import micromatch from 'micromatch';

import { CHECK, ESLINT, PRETTIER } from './commands';
import { JAVASCRIPT_FILES, JSON_FILES, MARKDOWN_FILES, PRISMA_FILES, TYPESCRIPT_FILES } from './constants';

interface IConfigOptions {
    allStagedFiles?: string[];
    configuration?: {
        onEslint?: boolean;
        onPrettier?: boolean;
        onTypescriptTypesCheck?: boolean;
    };
}

const config = (options: IConfigOptions = {}) => {
    const { allStagedFiles = [], configuration = {} } = options;

    const defaultConfiguration: IConfigOptions['configuration'] = {
        onEslint: true,
        onPrettier: true,
        onTypescriptTypesCheck: true,
    };

    const { onEslint, onPrettier, onTypescriptTypesCheck } = { ...defaultConfiguration, ...configuration };

    const shFiles = micromatch(allStagedFiles, ['**/src/**/*.sh']);

    if (shFiles.length !== 0) return [`printf '%s\n' "Script files aren't allowed in src directory" >&2`];

    const eslintFiles = micromatch(allStagedFiles, [
        ...JAVASCRIPT_FILES,
        ...TYPESCRIPT_FILES,
    ]);

    const prettierFiles = micromatch(allStagedFiles, [
        ...JAVASCRIPT_FILES,
        ...TYPESCRIPT_FILES,
        ...MARKDOWN_FILES,
        ...PRISMA_FILES,
        ...JSON_FILES,
    ]);

    const tsFiles = micromatch(allStagedFiles, [
        ...TYPESCRIPT_FILES,
    ]);

    const commands: string[] = [];

    if (tsFiles.length !== 0 && onTypescriptTypesCheck) commands.push(`${CHECK} ${tsFiles.join(' ')}`);

    if (eslintFiles.length !== 0 && onEslint) commands.push(`${ESLINT} ${eslintFiles.join(' ')}`);

    if (prettierFiles.length !== 0 && onPrettier) commands.push(`${PRETTIER} ${prettierFiles.join(' ')}`);

    if (commands.length === 0) return ['echo "No matching files for linting"'];

    return commands;
};

export { config };
