import micromatch from 'micromatch';

import { ESLINT, PRETTIER } from './commands';
import { JAVASCRIPT_FILES, JSON_FILES, MARKDOWN_FILES, PRISMA_FILES, TYPESCRIPT_FILES } from './constants';

interface IConfigOptions {
    allStagedFiles?: string[];
    configuration?: {
        eslint?: boolean;
        prettier?: boolean;
    };
}

const config = (options: IConfigOptions = {}): string[] => {
    const { allStagedFiles = [], configuration = {} } = options;

    const defaultConfiguration: IConfigOptions['configuration'] = {
        eslint: true,
        prettier: true,
    };

    const { eslint, prettier } = { ...defaultConfiguration, ...configuration };

    const shFiles = micromatch(allStagedFiles, ['**/src/**/*.sh']);

    if (shFiles.length !== 0) return ["printf '%s\n' \"Script files aren't allowed in src directory\" >&2"];

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

    const commands: string[] = [];

    if (eslintFiles.length !== 0 && eslint) commands.push(`${ESLINT} ${eslintFiles.join(' ')}`);

    if (prettierFiles.length !== 0 && prettier) commands.push(`${PRETTIER} ${prettierFiles.join(' ')}`);

    if (commands.length === 0) return ['echo "No matching files for linting"'];

    return commands;
};

export { config };
