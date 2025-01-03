// @ts-expect-error eslint-config-airbnb-base/rules/react is not typed
import eslintConfigAirbnbRulesReact from 'eslint-config-airbnb/rules/react';
// @ts-expect-error eslint-config-airbnb-base/rules/react-a11y is not typed
import eslintConfigAirbnbRulesReactA11y from 'eslint-config-airbnb/rules/react-a11y';
// @ts-expect-error eslint-config-airbnb-base/rules/react-hooks is not typed
import eslintConfigAirbnbRulesReactHooks from 'eslint-config-airbnb/rules/react-hooks';
// @ts-expect-error eslint-config-airbnb-base/rules/best-practices is not typed
import eslintConfigAirbnbBaseRulesBestPractices from 'eslint-config-airbnb-base/rules/best-practices';
// @ts-expect-error eslint-config-airbnb-base/rules/errors is not typed
import eslintConfigAirbnbBaseRulesErrors from 'eslint-config-airbnb-base/rules/errors';
// @ts-expect-error eslint-config-airbnb-base/rules/es6 is not typed
import eslintConfigAirbnbBaseRulesEs6 from 'eslint-config-airbnb-base/rules/es6';
// @ts-expect-error eslint-config-airbnb-base/rules/imports is not typed
import eslintConfigAirbnbBaseRulesImports from 'eslint-config-airbnb-base/rules/imports';
// @ts-expect-error eslint-config-airbnb-base/rules/node is not typed
import eslintConfigAirbnbBaseRulesNode from 'eslint-config-airbnb-base/rules/node';
// @ts-expect-error eslint-config-airbnb-base/rules/strict is not typed
import eslintConfigAirbnbBaseRulesStrict from 'eslint-config-airbnb-base/rules/strict';
// @ts-expect-error eslint-config-airbnb-base/rules/style is not typed
import eslintConfigAirbnbBaseRulesStyle from 'eslint-config-airbnb-base/rules/style';
// @ts-expect-error eslint-config-airbnb-base/rules/variables is not typed
import eslintConfigAirbnbBaseRulesVariables from 'eslint-config-airbnb-base/rules/variables';

import { bestPractices } from './best-practices';
import { errors } from './errors';
import { es6 } from './es6';
import { node } from './node';
import { strict } from './strict';
import { style } from './style';
import { variables } from './variables';

const airbnbBaseRules = {
    ...eslintConfigAirbnbBaseRulesBestPractices.rules,
    ...eslintConfigAirbnbBaseRulesErrors.rules,
    ...eslintConfigAirbnbBaseRulesEs6.rules,
    ...eslintConfigAirbnbBaseRulesNode.rules,
    ...eslintConfigAirbnbBaseRulesStrict.rules,
    ...eslintConfigAirbnbBaseRulesStyle.rules,
    ...eslintConfigAirbnbBaseRulesVariables.rules,
    ...bestPractices,
    ...errors,
    ...es6,
    ...node,
    ...strict,
    ...style,
    ...variables,
};

const airbnbBaseReactRules = {
    a11y: eslintConfigAirbnbRulesReactA11y.rules,
    react: eslintConfigAirbnbRulesReact.rules,
    reactHooks: eslintConfigAirbnbRulesReactHooks.rules,
};

const airbnbBaseImports = {
    rules: {
        ...eslintConfigAirbnbBaseRulesImports.rules,
    },
    settings: {
        ...eslintConfigAirbnbBaseRulesImports.settings,
    },
};

export { airbnbBaseImports, airbnbBaseReactRules, airbnbBaseRules };
