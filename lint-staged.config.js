import { config } from '@demonicattack/lint-staged';

export default {
  '**/*': (allStagedFiles) => {
    const commands = config({ allStagedFiles, configuration: {
      eslint: true,
      prettier: true,
    } });
    return commands;
  },
};
