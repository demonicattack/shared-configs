import type { TFlatConfigItem } from '../../types';

const getRulesByConfigName = (configName: string, configs: TFlatConfigItem[]) => {
    let rules = {};
    for (const config of configs) {
        if (config.name === configName && config.rules) {
            rules = { ...rules, ...config.rules };
        }
    }
    return rules;
};
export { getRulesByConfigName };
