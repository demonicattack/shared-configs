import { version } from '../package.json';

import { ESLintUtils } from '@typescript-eslint/utils';

interface IPluginDocuments {
    recommended?: boolean;
}

const getMetaDocumentsUrl = (pluginName: string) => (ruleName: string) =>
    `https://github.com/Demonic-Codeworks-Collective/development-tools/blob/${version}/docs/rules/${pluginName}-${ruleName}.md`;

// eslint-disable-next-line comments/disable-enable-pair
/* eslint-disable ts/explicit-function-return-type */
const createRuleForPlugin = (pluginName: string) =>
    ESLintUtils.RuleCreator<IPluginDocuments>(getMetaDocumentsUrl(pluginName));

export { createRuleForPlugin };
export type { IPluginDocuments };
