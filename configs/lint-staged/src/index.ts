import micromatch from 'micromatch';

import { ESLINT, PRETTIER, TYPE_CHECK } from './commands';
import { JAVASCRIPT_FILES, JSON_FILES, MARKDOWN_FILES, PRISMA_FILES, TYPESCRIPT_FILES } from './constants';

interface IConfigOptions {
    allStagedFiles?: string[];
    configuration?: {
        eslint?: boolean;
        prettier?: boolean;
        typeCheck?: boolean;
    };
}

const matchFiles = (files: string[], patterns: string[]): string[] => micromatch(files, patterns);

const lintStaged = (options: IConfigOptions = {}): string[] => {
    const { allStagedFiles = [], configuration = {} } = options;

    const defaultConfiguration: IConfigOptions['configuration'] = {
        eslint: true,
        prettier: true,
        typeCheck: true,
    };

    const { eslint, prettier, typeCheck } = { ...defaultConfiguration, ...configuration };

    const shFiles = matchFiles(allStagedFiles, ['**/src/**/*.sh']);

    if (shFiles.length !== 0) return ["printf '%s\n' \"Script files aren't allowed in src directory\" >&2"];

    const eslintFiles = matchFiles(allStagedFiles, [
        ...JAVASCRIPT_FILES,
        ...TYPESCRIPT_FILES,
    ]);
    const prettierFiles = matchFiles(allStagedFiles, [
        ...JAVASCRIPT_FILES,
        ...TYPESCRIPT_FILES,
        ...MARKDOWN_FILES,
        ...PRISMA_FILES,
        ...JSON_FILES,
    ]);

    const commands: string[] = [];

    if (prettierFiles.length !== 0 && prettier) commands.push(`${PRETTIER} ${prettierFiles.join(' ')}`);
    if (typeCheck && matchFiles(allStagedFiles, [...TYPESCRIPT_FILES]).length !== 0) commands.push(TYPE_CHECK());
    if (eslintFiles.length !== 0 && eslint) commands.push(`${ESLINT} ${eslintFiles.join(' ')}`);
    if (commands.length === 0) return ['echo "No matching files for linting"'];
    return commands;
};

export { lintStaged };
